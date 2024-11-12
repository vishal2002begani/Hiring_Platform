import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import JobData, { addJobRole } from '../candidates/jobdata';

const JobRoleForm = () => {
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState({ role: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newError = { role: '', description: '' };
    if (!role) newError.role = 'Job Role is required';
    if (!description) newError.description = 'Description is required';

    if (newError.role || newError.description) {
      setError(newError);
      return;
    }

    // Add new job role to JobData
    addJobRole(role, description);
    setSubmitted(true); // Show confirmation message
    setRole(''); // Clear form fields
    setDescription('');
    setError({ role: '', description: '' }); // Clear any previous errors
  };

  return (
    <div style={{ padding: '24px', maxWidth: '500px', margin: '0 auto' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold', color: '#1565c0' }}>
            Add New Job Role
          </Typography>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Job Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                fullWidth
                margin="normal"
                required
                error={!!error.role}
                helperText={error.role}
              />

              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                required
                multiline
                rows={4}
                error={!!error.description}
                helperText={error.description}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '16px', padding: '12px', fontWeight: 'bold' }}
              >
                Submit
              </Button>
            </form>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <Typography variant="h6" color="green" gutterBottom>
                New Job Role Added!
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: '16px' }}
                onClick={() => {
                  setSubmitted(false);
                  setError({ role: '', description: '' }); // Clear error on reset
                }}
              >
                Add Another Job Role
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JobRoleForm;
