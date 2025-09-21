import { lazy, Suspense } from "react";
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
import AIChatbot from './pages/dashboard/AIChatbot';

// New pages
import FeaturesPage from './pages/features/FeaturesPage';
import UseCasesPage from './pages/use-cases/UseCasesPage';
import ResourcesPage from './pages/resources/ResourcesPage';
import ContactPage from './pages/contact/ContactPage';
import SolutionsPage from './pages/solutions/SolutionsPage';
import DemoPage from './pages/demo/DemoPage';

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
      
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Navbar />
        <main className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/use-cases" element={<UseCasesPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/active" element={<div>frontend active</div>} />
            <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Login />} />
            <Route path="/dashboard/ai-chatbot" element={isAuthenticated ? <AIChatbot /> : <Login />} />
            <Route path="/dashboard/settings" element={isAuthenticated ? <Settings /> : <Login />} />
            <Route path="/dashboard/role-selection" element={isAuthenticated ? <RoleSelection /> : <Login />} />
            <Route path="/dashboard/agreement/summary" element={isAuthenticated ? <SummaryPageWithTargetGroup /> : <Login />} />
            <Route path="/dashboard/case/case-details" element={isAuthenticated ? <CasesList /> : <Login />} />
            <Route path="/dashboard/process/summary" element={isAuthenticated ? <AgreementProcess /> : <Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Chatbot />
        <Footer />
      </div>
    </>
  );
}

export default App;