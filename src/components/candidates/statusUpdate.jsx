// StatusUpdate.js
import React from "react";
import { Select, MenuItem, Button, Typography, Box } from "@mui/material";

const StatusUpdate = ({ candidate, setCandidate, onSave }) => {
  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Typography variant="body1" gutterBottom>
        Update Status
      </Typography>
      <Select
        fullWidth
        variant="outlined"
        value={candidate.status}
        onChange={(e) => setCandidate({ ...candidate, status: e.target.value })}
        sx={{ marginBottom: "8px" }}
      >
        <MenuItem value="Under Review">Under Review</MenuItem>
        <MenuItem value="Offered">Offered</MenuItem>
        <MenuItem value="Rejected">Rejected</MenuItem>
        <MenuItem value="Interview Scheduled">Interview Scheduled</MenuItem>
      </Select>
      <Button
        variant="contained"
        color="primary"
        onClick={onSave}
        fullWidth
      >
        Update Status
      </Button>
    </Box>
  );
};

export default StatusUpdate;
