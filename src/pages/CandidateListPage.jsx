import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";

const CandidateListPage = () => {
  const { jobId } = useParams();
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  const job = jobs[jobId];
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "24px" }}>
      <Typography variant="h4" gutterBottom align="center">
        Candidates for {job.role}
      </Typography>
      <Divider sx={{ marginBottom: "24px" }} />

      <Grid container spacing={3} justifyContent="center">
        {job.applicants.map((candidate, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ borderRadius: 2 }}>
              <Card>
                <CardContent sx={{ padding: "16px", textAlign: "center" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
                    {candidate.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Application Date: {candidate.applied_date}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ marginBottom: "16px" }}>
                    Status: {candidate.status}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/candidates/${jobId}/${index}`)}
                    fullWidth
                    sx={{ padding: "8px 0", fontWeight: "bold" }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CandidateListPage;
