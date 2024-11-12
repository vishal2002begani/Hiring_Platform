// CandidateInfo.js
import React from "react";
import { Typography, Box, Divider, Link } from "@mui/material";

const CandidateInfo = ({ candidate }) => {
  return (
    <Box sx={{ marginBottom: "16px" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        {candidate.name}
      </Typography>
      <Typography>Email: {candidate.email_id}</Typography>
      <Typography>Contact: {candidate.contact_no}</Typography>
      <Typography>Experience: {candidate.experience}</Typography>
      <Typography>Skills: {candidate.skills.join(", ")}</Typography>
      <Typography>Application Date: {candidate.applied_date}</Typography>
      <Typography>Status: {candidate.status}</Typography>

      <Divider sx={{ marginY: 2 }} />

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
          Resume
        </Typography>
        <Link
          href={candidate.resume_link}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          sx={{ fontSize: "16px", color: "primary.main" }}
        >
          View/Download Resume
        </Link>
      </Box>
    </Box>
  );
};

export default CandidateInfo;
