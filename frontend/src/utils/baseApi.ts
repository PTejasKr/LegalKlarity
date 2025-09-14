import axios from "axios";
import { auth } from "./firebase";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const geminiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Add auth token to requests
api.interceptors.request.use(async (config) => {
  // Get fresh ID token before each request
  const currentUser = auth.currentUser;
  if (currentUser) {
    try {
      const idToken = await currentUser.getIdToken(true); // Force refresh
      localStorage.setItem("idToken", idToken);
      config.headers.Authorization = `Bearer ${idToken}`;
    } catch (error) {
      console.error("Error refreshing token:", error);
      localStorage.removeItem("idToken");
    }
  } else {
    const idToken = localStorage.getItem('idToken');
    if (idToken) {
      config.headers.Authorization = `Bearer ${idToken}`;
    }
  }
  return config;
});

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If token expired, try to refresh it
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const idToken = await currentUser.getIdToken(true); // Force refresh
          localStorage.setItem("idToken", idToken);
          originalRequest.headers.Authorization = `Bearer ${idToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          console.error("Error refreshing token:", refreshError);
          localStorage.removeItem("idToken");
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export { geminiKey };
export default api;