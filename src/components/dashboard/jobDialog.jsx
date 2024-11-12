import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";

const JobDialog = ({ isDialogOpen, handleClose, jobDetails, setJobDetails, handleSaveJob, isEditing, isOther, setIsOther }) => {
  
  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setJobDetails({ ...jobDetails, role: selectedRole });
    setIsOther(selectedRole === "Other"); // Toggle "Other" input if "Other" is selected
  };

  return (
    <Dialog open={isDialogOpen} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>{isEditing ? "Edit Job Posting" : "Add Job Posting"}</DialogTitle>
      <DialogContent>
        <FormControl fullWidth margin="dense">
          <InputLabel>Job Role</InputLabel>
          <Select
            value={jobDetails.role}
            onChange={handleRoleChange}
            label="Job Role"
          >
            <MenuItem value="Software Engineer">Software Engineer</MenuItem>
            <MenuItem value="Data Analyst">Data Analyst</MenuItem>
            <MenuItem value="Product Manager">Product Manager</MenuItem>
            <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
            <MenuItem value="Quality Assurance Engineer">Quality Assurance Engineer</MenuItem>
            <MenuItem value="DevOps Engineer">DevOps Engineer</MenuItem>
            <MenuItem value="Business Analyst">Business Analyst</MenuItem>
            <MenuItem value="Cybersecurity Specialist">Cybersecurity Specialist</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {isOther && (
            <TextField
              label="Please specify"
              fullWidth
              margin="dense"
              value={jobDetails.role === "Other" ? "" : jobDetails.role}
              onChange={(e) => setJobDetails({ ...jobDetails, role: e.target.value })}
            />
          )}
        </FormControl>
        <TextField
          label="Job Description"
          fullWidth
          margin="dense"
          value={jobDetails.description}
          onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSaveJob} color="primary">
          {isEditing ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default JobDialog;
