import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {TextField,Button,Typography,Radio,FormControlLabel,Grid2,Card,CardContent,Box,} from '@mui/material';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'Devops Developer' },
  { id: '5', role: 'AI Engineer' },
];

const NewFormPage = () => {
  const { jobId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(null);
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === jobId);
  const jobRole = job ? job.role : jobId;

  const addQuestion = () => {
    if (!questionText || correctOption === null) {
      alert('Please complete the question and select the correct answer.');
      return;
    }

    const newQuestion = { questionText, options, correctOption };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectOption(null);
  };

  const saveForm = () => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};

    if (!storedAssessments[jobId]) {
      storedAssessments[jobId] = {};
    }

    const formCount = Object.keys(storedAssessments[jobId]).length;
    const newFormKey = `form-${formCount + 1}`;

    storedAssessments[jobId][newFormKey] = questions;
    localStorage.setItem('assessments', JSON.stringify(storedAssessments));

    navigate('/assessments');
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Create New Form for {jobRole}
      </Typography>

      <Card variant="outlined" sx={{ mt: 2, padding: 3 }}>
        <CardContent>
          <TextField
            label="Enter Question Text"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Typography variant="subtitle1" gutterBottom>
            Options
          </Typography>
          <Grid2 container spacing={2}>
            {options.map((option, index) => (
              <Grid2 item xs={12} sm={6} key={index}>
                <TextField
                  variant="outlined"
                  label={`Option ${index + 1}`}
                  fullWidth
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...options];
                    newOptions[index] = e.target.value;
                    setOptions(newOptions);
                  }}
                  sx={{ mb: 1 }}
                />
                <FormControlLabel
                  control={
                    <Radio
                      checked={correctOption === index}
                      onChange={() => setCorrectOption(index)}
                      color="primary"
                    />
                  }
                  label="Correct Answer"
                />
              </Grid2>
            ))}
          </Grid2>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button variant="contained" color="primary" onClick={addQuestion}>
              Add Question
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
          Added Questions
        </Typography>
        {questions.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No questions added yet.
          </Typography>
        ) : (
          <Grid2 container spacing={2}>
            {questions.map((question, index) => (
              <Grid2 item xs={12} key={index}>
                <Card variant="outlined" sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
                  <Typography variant="h6">{`Q${index + 1}: ${question.questionText}`}</Typography>
                </Card>
              </Grid2>
            ))}
          </Grid2>
        )}
      </Box>

      <Button
        variant="contained"
        color="success"
        fullWidth
        sx={{ mt: 4, py: 1.5 }}
        onClick={saveForm}
      >
        Save Form
      </Button>
    </Box>
  );
};

export default NewFormPage;
