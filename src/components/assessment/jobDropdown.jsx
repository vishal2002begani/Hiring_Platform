import React, { useState } from 'react';
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'DevOps Developer' },
  { id: '5', role: 'AI Engineer' },
];

const JobDropdown = ({ onSelectJob, label }) => {
  const [selectedJob, setSelectedJob] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customJob, setCustomJob] = useState('');

  const handleChange = (event) => {
    const jobId = event.target.value;
    setSelectedJob(jobId);

    if (jobId === 'other') {
      setIsDialogOpen(true); // Open dialog for custom role input
    } else {
      onSelectJob(jobId); // Pass selected job ID
      setCustomJob(''); // Clear custom job input if another job is selected
    }
  };

  const handleCustomJobChange = (event) => {
    setCustomJob(event.target.value);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedJob(''); // Reset selection if dialog is canceled
  };

  const handleDialogSave = () => {
    onSelectJob(customJob); // Save custom job role
    setIsDialogOpen(false); // Close dialog
  };

  return (
    <Box sx={{ marginBottom: '16px' }}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          value={selectedJob}
          onChange={handleChange}
          label={label}
        >
          <MenuItem value="" disabled>
            Select a job role
          </MenuItem>
          {jobs.map((job) => (
            <MenuItem key={job.id} value={job.id}>
              {job.role}
            </MenuItem>
          ))}
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>

      {/* Dialog for custom job role */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose} maxWidth="md" fullWidth>
        <DialogTitle>Enter Custom Job Role</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="normal"
            label="Custom Job Role"
            value={customJob}
            onChange={handleCustomJobChange}
            placeholder="Enter your custom job role"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleDialogSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default JobDropdown;
