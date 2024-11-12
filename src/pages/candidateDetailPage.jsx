// CandidateDetailsPage.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Paper, Box, Divider } from "@mui/material";
import CandidateInfo from "../components/candidates/candidateInfo";
import StatusUpdate from "../components/candidates/statusUpdate";

const CandidateDetailsPage = () => {
  const { jobId, candidateIndex } = useParams();
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  const job = jobs[jobId];
  const [candidate, setCandidate] = useState(job.applicants[candidateIndex]);
  const navigate = useNavigate();

  const handleStatusUpdate = () => {
    const updatedJobs = [...jobs];
    updatedJobs[jobId].applicants[candidateIndex] = candidate;
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    navigate(`/candidates/${jobId}`);
  };

  return (
    <Box sx={{ padding: "24px", display: "flex", justifyContent: "center" }}>
      <Paper
        elevation={3}
        sx={{ padding: "24px", maxWidth: "600px", width: "100%", borderRadius: 2 }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Candidate Details
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <CandidateInfo candidate={candidate} />

        <Divider sx={{ marginY: 2 }} />

        <StatusUpdate
          candidate={candidate}
          setCandidate={setCandidate}
          onSave={handleStatusUpdate}
        />
      </Paper>
    </Box>
  );
};

export default CandidateDetailsPage;
