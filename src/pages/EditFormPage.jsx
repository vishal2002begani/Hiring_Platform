import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button,Typography,TextField,Grid2,IconButton,Card,CardContent,Box,} from '@mui/material';
import { Delete, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';

const EditFormPage = () => {
  const { jobId, formKey } = useParams();
  const [questions, setQuestions] = useState([]);
  const [newQuestionText, setNewQuestionText] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [newCorrectOption, setNewCorrectOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    const form = storedAssessments[jobId]?.[formKey] || [];
    setQuestions(form);
  }, [jobId, formKey]);

  const handleSave = () => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    storedAssessments[jobId][formKey] = questions;
    localStorage.setItem('assessments', JSON.stringify(storedAssessments));
    navigate('/assessments');
  };

  const addNewQuestion = () => {
    if (!newQuestionText || newCorrectOption === null) {
      alert('Please fill in all fields.');
      return;
    }

    const newQuestion = {
      questionText: newQuestionText,
      options: newOptions,
      correctOption: newCorrectOption,
    };

    setQuestions([...questions, newQuestion]);
    setNewQuestionText('');
    setNewOptions(['', '', '', '']);
    setNewCorrectOption(null);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const setCorrectOption = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].correctOption = optionIndex;
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Edit Form - {formKey}
      </Typography>

      <Grid2 container spacing={3}>
        {questions.map((question, index) => (
          <Grid2 item xs={12} key={index}>
            <Card variant="outlined" sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
              <CardContent>
                <TextField
                  fullWidth
                  label={`Question ${index + 1}`}
                  variant="outlined"
                  value={question.questionText}
                  onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                  sx={{ marginBottom: 2 }}
                />

                <Grid2 container spacing={2}>
                  {question.options.map((option, optionIndex) => (
                    <Grid2 item xs={12} sm={6} key={optionIndex}>
                      <TextField
                        fullWidth
                        label={`Option ${optionIndex + 1}`}
                        variant="outlined"
                        value={option}
                        onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                        sx={{ marginBottom: 1 }}
                      />
                      <IconButton
                        color={question.correctOption === optionIndex ? 'primary' : 'default'}
                        onClick={() => setCorrectOption(index, optionIndex)}
                      >
                        {question.correctOption === optionIndex ? (
                          <CheckCircle fontSize="small" />
                        ) : (
                          <RadioButtonUnchecked fontSize="small" />
                        )}
                      </IconButton>
                    </Grid2>
                  ))}
                </Grid2>
                
                <IconButton color="error" onClick={() => deleteQuestion(index)} sx={{ marginTop: 1 }}>
                  <Delete />
                </IconButton>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Add New Question Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Add New Question
        </Typography>
        <Card variant="outlined" sx={{ padding: 2, backgroundColor: '#f9f9f9' }}>
          <CardContent>
            <TextField
              fullWidth
              label="New Question"
              variant="outlined"
              value={newQuestionText}
              onChange={(e) => setNewQuestionText(e.target.value)}
              sx={{ marginBottom: 2 }}
            />

            <Grid2 container spacing={2}>
              {newOptions.map((option, index) => (
                <Grid2 item xs={12} sm={6} key={index}>
                  <TextField
                    fullWidth
                    label={`Option ${index + 1}`}
                    variant="outlined"
                    value={option}
                    onChange={(e) => {
                      const newOptionsList = [...newOptions];
                      newOptionsList[index] = e.target.value;
                      setNewOptions(newOptionsList);
                    }}
                    sx={{ marginBottom: 1 }}
                  />
                </Grid2>
              ))}
            </Grid2>

            <Grid2 container spacing={2}>
              {newOptions.map((option, index) => (
                <Grid2 item key={index}>
                  <IconButton color={newCorrectOption === index ? 'primary' : 'default'}onClick={() => setNewCorrectOption(index)}>
                    {newCorrectOption === index ? <CheckCircle /> : <RadioButtonUnchecked />}
                  </IconButton>
                </Grid2>
              ))}
            </Grid2>

            <Button
              variant="contained"
              color="primary"
              onClick={addNewQuestion}
              sx={{ marginTop: 3 }}
            >
              Add Question
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Button
        variant="contained"
        color="success"
        onClick={handleSave}
        fullWidth
        sx={{ marginTop: 4, paddingY: 1.5 }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default EditFormPage;
