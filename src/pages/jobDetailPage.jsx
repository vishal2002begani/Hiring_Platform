import React from 'react';
import JobData from '../components/candidates/jobdata'
import { Card, CardContent, Typography, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import JobForm from '../components/dashboard/jobForm';

const JobDetailsPage = () => {
  const handleJobClick = (job) => {
    // Add functionality here, e.g., navigating to a detailed page or displaying more info
    console.log("Clicked on job role:", job.role);
  };

  return (
    <>
    <JobForm/>
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Job Roles
      </Typography>

      {/* Loop through each job role in jobData */}
      {JobData.job_roles.map((job, index) => (
        <Card key={index} style={{ marginBottom: '16px' }}>
          <CardContent>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => handleJobClick(job)} 
              style={{ textTransform: 'none', display: 'flex', alignItems: 'center' }}
            >
              <Typography variant="h5" component="div">
                {job.role}
              </Typography>
            </Button>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Description: {job.description}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Number of Applicants: {job.applicants.length}
            </Typography>
            <Button><EditIcon style={{ marginRight: '8px' }} /></Button>
            <Button><DeleteIcon style={{ marginRight: '8px' }} /></Button>
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
};

export default JobDetailsPage;
