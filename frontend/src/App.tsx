import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { useAppDispatch } from './hooks/redux';
import About from './pages/general/About';
import Help from './pages/general/Help';
import HomePage from './pages/home/HomePage';
import Footer from './layouts/Footer';
import Navbar from './layouts/Navbar';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import RoleSelection from './pages/dashboard/agreement/RoleSelection';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getCurrentUserAsync } from './store/authSlice';
import SummaryPage from './pages/dashboard/agreement/SummaryPage';
import { useLocation } from 'react-router-dom';
import CasesList from './pages/dashboard/case/CasesList';
import AgreementProcess from './pages/dashboard/process/AgreementProcess';
import Dashboard from './pages/dashboard/Dashboard';
import Settings from './pages/dashboard/Settings';
import Chatbot from './pages/home/Chatbot';

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Chatbot from "./components/chatbot/Chatbot";
import { useAppSelector } from "./hooks/redux";
import Loader from "./components/common/Loader";
import EnhancedSummaryPage from './pages/dashboard/agreement/EnhancedSummaryPage';

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
                <Route path="/dashboard/agreement/summary" element={isAuthenticated ? <EnhancedSummaryPage /> : <Login />} />
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
