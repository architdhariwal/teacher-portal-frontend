import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { forgotPassword } from '../redux/actions/authActions';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState(''); // Added username state
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      await dispatch(forgotPassword({ email, username })); // Include username in the request
      setMessage('Password reset link has been sent to your email.');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send password reset link.');
    }
  };

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Handle username input
          />
          {message && (
            <Typography color="primary" variant="body2">
              {message}
            </Typography>
          )}
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Reset Link
          </Button>
          <Button
            fullWidth
            variant="text"
            onClick={handleBackToLogin}
          >
            Back to Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
