import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

const FormCard = ({ jobRole, questions }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: '20px auto', padding: '16px' }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {jobRole}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Number of Questions: {questions.length}
        </Typography>
        <List>
          {questions.map((question, index) => (
            <ListItem key={index} sx={{ padding: '4px 0' }}>
              {question.questionText}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FormCard;
