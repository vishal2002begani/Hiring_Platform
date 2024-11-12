import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid, Box } from "@mui/material";
import jobData from "../components/candidates/jobData";
import JobDialog from "../components/dashboard/jobDialog";

const DashboardPage = () => {
  const [readMoreStates, setReadMoreStates] = useState({});
  const [jobs, setJobs] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [jobDetails, setJobDetails] = useState({ role: "", description: "" });
  const [isOther, setIsOther] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs"));
    // console.log(storedJobs);
    if (!storedJobs) {
      localStorage.setItem("jobs", JSON.stringify(jobData.job_roles));
      setJobs(jobData.job_roles);
    } else {

      setJobs(storedJobs);
    }

    const initialReadMoreStates = (storedJobs || []).reduce((acc, _, index) => {
      acc[index] = true;
      return acc;
    }, {});
    setReadMoreStates(initialReadMoreStates);
  }, []);

  const handleReadMoreToggle = (index) => {
    setReadMoreStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const saveJobs = (updatedJobs) => {
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  const handleAddJob = () => {
    setJobDetails({ role: "", description: "" });
    setIsOther(false);
    setIsEditing(false);
    setIsDialogOpen(true);
  };

  const handleEditJob = (index) => {
    setJobDetails(jobs[index]);
    setIsOther(jobs[index].role === "Other");
    setEditingIndex(index);
    setIsEditing(true);
    setIsDialogOpen(true);
  };

  const handleSaveJob = () => {
    if (!jobDetails.role || !jobDetails.description) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedJobs = [...jobs];
    if (isEditing) {
      updatedJobs[editingIndex] = jobDetails;
    } else {
      updatedJobs.push({ ...jobDetails, applicants: [] });
    }
    saveJobs(updatedJobs);
    setIsDialogOpen(false);
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    saveJobs(updatedJobs);
  };

  return (
    <div style={{ padding: "32px" }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: "center", color: "#1565c0", fontWeight: "bold" }}>
        Job Postings Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddJob}
        sx={{ marginBottom: "24px", padding: "10px 20px", backgroundColor: "#1976d2", borderRadius: "8px" }}
      >
        Add Job Posting
      </Button>

      <Grid container spacing={4}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "300px", display: "flex", flexDirection: "column", boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", borderRadius: "12px" }}>
              <CardContent sx={{ flexGrow: 1, overflow: "auto" }}>
                <Typography variant="h6" style={{ fontWeight: "bold", color: "#333" }}>
                  {job.role}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginBottom: "12px", color: "#666" }}
                  sx={{ display: "-webkit-box", overflow: "hidden", WebkitBoxOrient: "vertical" }}
                >
                  {job.description.length > 250 && readMoreStates[index]
                    ? job.description.slice(0, 250)
                    : job.description}
                  {job.description.length > 250 && (
                    <Typography
                      variant="body2"
                      color="primary"
                      component="span"
                      onClick={() => handleReadMoreToggle(index)}
                      sx={{ cursor: 'pointer', '&:hover': { color: 'secondary.main' } }}
                    >
                      {readMoreStates[index] ? '...read more' : 'read less'}
                    </Typography>
                  )}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'black',
                    fontSize: '0.875rem',
                  }}
                >
                  Applicants: {job.applicants?.length || 0}
                </Typography>

              </CardContent>
              <Box sx={{ padding: "16px", textAlign: "center", display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 1, justifyContent: "center" }}>
                <Button variant="outlined" color="primary" sx={{ fontSize: "0.9rem" }} onClick={() => handleEditJob(index)}>
                  Edit
                </Button>
                <Button variant="outlined" color="secondary" sx={{ fontSize: "0.9rem" }} onClick={() => handleDeleteJob(index)}>
                  Delete
                </Button>
                <Button variant="outlined" color="info" sx={{ fontSize: "0.9rem" }} onClick={() => navigate(`/candidates/${index}`)}>
                  View Candidates
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <JobDialog
        isDialogOpen={isDialogOpen}
        handleClose={() => setIsDialogOpen(false)}
        jobDetails={jobDetails}
        setJobDetails={setJobDetails}
        handleSaveJob={handleSaveJob}
        isEditing={isEditing}
        isOther={isOther}
        setIsOther={setIsOther}
      />
    </div>
  );
};

export default DashboardPage;
