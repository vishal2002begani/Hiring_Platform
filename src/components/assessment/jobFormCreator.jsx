// JobFormCreator.js
import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import JobDropdown from './jobDropdown';

const JobFormCreator = ({ onCreateForm }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
      >
        Assessment Management
      </Typography>

      <JobDropdown onSelectJob={onCreateForm} label="Select Job to Create New Form" />

      <Divider sx={{ my: 4 }} />
    </Box>
  );
};

export default JobFormCreator;
