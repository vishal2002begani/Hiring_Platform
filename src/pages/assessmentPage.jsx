import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobFormCreator from '../components/assessment/jobFormCreator';
import ExistingFormsList from '../components/assessment/existingFormList';
import { Container, Typography, Box } from '@mui/material';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'Devops Developer' },
  { id: '5', role: 'AI Engineer' },
];

const AssessmentPage = () => {
  const [assessments, setAssessments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    setAssessments(storedAssessments);
  }, []);

  const handleCreateForm = (jobId) => {
    navigate(`/new-form/${jobId}`);
  };

  const handleDeleteForm = (jobId, formKey) => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    if (storedAssessments[jobId]) {
      delete storedAssessments[jobId][formKey];
      if (Object.keys(storedAssessments[jobId]).length === 0) {
        delete storedAssessments[jobId];
      }
      localStorage.setItem('assessments', JSON.stringify(storedAssessments));
      setAssessments(storedAssessments);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '24px' }}> {/* Reduced padding */}
      <Box sx={{ marginBottom: '24px', textAlign: 'center' }}> {/* Reduced margin */}
        {/* <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}></Typography> */}
        {/* <Typography variant="body1" sx={{ color: '#555' }}></Typography> */}
      </Box>

      <Box sx={{ marginBottom: '16px' }}> {/* Reduced margin */}
        <JobFormCreator onCreateForm={handleCreateForm} />
      </Box>

      <Typography variant="body1" sx={{ color: '#555' }}>
        Create and manage assessment forms for various job roles
      </Typography>

      <Box sx={{ marginTop: '24px' }}> {/* Reduced margin */}
        <ExistingFormsList assessments={assessments} jobs={jobs} onDeleteForm={handleDeleteForm} />
      </Box>
    </Container>
  );
};

export default AssessmentPage;
