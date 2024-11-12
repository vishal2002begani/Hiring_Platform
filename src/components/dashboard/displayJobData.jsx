import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import jobData from '../candidates/jobData'; // Adjust the path to your jobData location

const JobRolesDisplay = () => {
  const [jobRoles, setJobRoles] = useState(jobData.job_roles); // Initialize with jobData
  const [editJob, setEditJob] = useState(null);  // Track job being edited
  const [editedRole, setEditedRole] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  // Handle delete job role
  const handleDelete = (index) => {
    const updatedJobs = [...jobRoles];
    updatedJobs.splice(index, 1); // Remove job at the given index
    setJobRoles(updatedJobs); // Update state to re-render component
  };

  // Handle edit click
  const handleEditClick = (job, index) => {
    setEditJob(index); // Track the index of the job being edited
    setEditedRole(job.role); // Pre-fill with existing data
    setEditedDescription(job.description);
  };

  // Handle save after editing
  const handleEditSubmit = () => {
    const updatedJobs = [...jobRoles];
    updatedJobs[editJob] = { ...updatedJobs[editJob], role: editedRole, description: editedDescription }; // Update job details
    setJobRoles(updatedJobs); // Update state to re-render component
    setEditJob(null); // Close edit dialog
  };

  return (
    <div style={{ padding: '16px' }}>
      {jobRoles.length === 0 ? (
        <Typography variant="body1">No job roles available.</Typography>
      ) : (
        <Grid container spacing={3}>
          {jobRoles.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="div">
                  <Button variant="contained">{job.role}</Button>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {job.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Applicants: {job.applicants} */}
                  </Typography>

                  {/* Edit and Delete Buttons */}
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginTop: '8px', marginRight: '8px' }}
                    onClick={() => handleEditClick(job, index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    style={{ marginTop: '8px' }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Edit Dialog */}
      <Dialog open={editJob !== null} onClose={() => setEditJob(null)}>
        <DialogTitle>Edit Job Role</DialogTitle>
        <DialogContent>
          <TextField
            label="Job Role"
            value={editedRole}
            onChange={(e) => setEditedRole(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditJob(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEditSubmit} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default JobRolesDisplay;
