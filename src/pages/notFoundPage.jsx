import React from 'react';
import { Container, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NotFoundPage = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <SentimentDissatisfiedIcon sx={{ fontSize: 100, color: '#1976d2', mb: 2 }} />
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
        404
      </Typography>
      <Typography variant="h5" gutterBottom>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" color="textSecondary" mb={3}>
        The page you're looking for doesn't exist. It might have been moved or deleted.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ mt: 3, backgroundColor: '#1976d2', color: '#fff' }}
      >
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
