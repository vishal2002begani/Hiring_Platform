import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import only what's needed

// Import your pages
import DashboardPage from './pages/dashboardPage';
import CandidateListPage from "./pages/CandidateListPage";
import CandidateDetailsPage from "./pages/candidateDetailPage";
import AssessmentPage from './pages/assessmentPage';
import NotFoundPage from './pages/notFoundPage';
import Navbar from './components/Navbar.js';
import NewFormPage from './pages/NewFormPage';
import EditFormPage from './pages/EditFormPage';

const AppRoutes = () => {
  return (
    <>
  
    <BrowserRouter> 
      <Navbar/>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/assessments" element={<AssessmentPage />} />
        <Route path="/new-form/:jobId" element={<NewFormPage />} />
        <Route path="/edit-form/:jobId/:formKey" element={<EditFormPage />} />
        <Route path="/candidates/:jobId" element={<CandidateListPage />} />
        <Route path="/candidates/:jobId/:candidateIndex" element={<CandidateDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default AppRoutes;
