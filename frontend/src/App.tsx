import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Chatbot from "./components/chatbot/Chatbot";
import { useAppSelector } from "./hooks/redux";
import Loader from "./components/common/Loader";
import LegalDocumentAnalyzer from './pages/dashboard/agreement/LegalDocumentAnalyzer';

// Lazy load components
const Home = lazy(() => import("./pages/home/HomePage"));
const Login = lazy(() => import("./pages/auth/Login"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Settings = lazy(() => import("./pages/dashboard/Settings"));
const RoleSelection = lazy(() => import("./pages/dashboard/agreement/RoleSelection"));
const CasesList = lazy(() => import("./pages/dashboard/case/CasesList"));
const AgreementProcess = lazy(() => import("./pages/dashboard/process/AgreementProcess"));

function App() {
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
                <Route path="/signup" element={!isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
                <Route path="/dashboard/settings" element={isAuthenticated ? <Settings /> : <Login />} />
                <Route path="/dashboard/role-selection" element={isAuthenticated ? <RoleSelection /> : <Login />} />
                <Route path="/dashboard/agreement/summary" element={isAuthenticated ? <LegalDocumentAnalyzer /> : <Login />} />
                <Route path="/dashboard/case/case-details" element={isAuthenticated ? <CasesList /> : <Login />} />
                <Route path="/dashboard/process/summary" element={isAuthenticated ? <AgreementProcess /> : <Login />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Suspense>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;