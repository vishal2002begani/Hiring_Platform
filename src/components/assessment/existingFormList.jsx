import React from 'react';
import { Typography, Grid, Card, CardContent, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExistingFormsList = ({ assessments, jobs, onDeleteForm }) => {
  const navigate = useNavigate();
  
  // Get the current theme and useMediaQuery to check screen size
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if the screen width is small
  
  const getJobRoleForms = (jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    const jobRole = job ? job.role : jobId;
    const forms = assessments[jobId] || {};
    
    return Object.entries(forms).map(([formKey, questions], index) => ({
      formName: `${jobRole} Form ${index + 1}`,
      questions,
      formKey,
    }));
  };

  return (
    <Box>
      <Typography variant="h5" color="textSecondary" sx={{ fontWeight: 500 }}>
        Existing Forms
      </Typography>

      <Grid container spacing={3} sx={{ justifyContent: 'center', marginTop: 2 }}>
        {Object.keys(assessments).length === 0 ? (
          <Typography variant="body1" color="textSecondary" sx={{ margin: 2, padding: 2 }}>
            No assessments created yet.
          </Typography>
        ) : (
          Object.entries(assessments).map(([jobId]) =>
            getJobRoleForms(jobId).map(({ formName, questions, formKey }) => (
              <Grid item xs={12} sm={6} md={4} key={`${jobId}-${formKey}`}>
                <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                      {formName}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'black' }}>
                      Number of Questions: {questions.length} 
                    </Typography>
                    <Box sx={{
                      display: 'flex',
                      flexDirection: isSmallScreen ? 'column' : 'row', // Stack vertically on small screens
                      justifyContent: 'space-between',
                      gap: isSmallScreen ? '8px' : '0', // Add gap between buttons for small screens
                    }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mt: 1, borderRadius: '8px', px: 3 }}
                        onClick={() => navigate(`/edit-form/${jobId}/${formKey}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        sx={{ mt: 1, borderRadius: '8px', px: 3 }}
                        onClick={() => onDeleteForm(jobId, formKey)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )
        )}
      </Grid>
    </Box>
  );
};

export default ExistingFormsList;
