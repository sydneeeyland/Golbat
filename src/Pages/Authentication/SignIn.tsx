import React, { useState } from 'react';

import LoginIcon from '@mui/icons-material/Login';
import { Facebook, Google } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  Input,
} from '@mui/material';

import { useLoginStyles } from '../../Assets/Styles/LoginStyles';

function SignIn() {
  // TODO: Refactor, Code Cleanup
  const classes = useLoginStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.container}>
        <Typography variant="h3" gutterBottom>
          Login
        </Typography>
        <Box className={classes.inputContainer}>
          <TextField
            sx={{ mb: 2, width: '100%' }}
            id="standard-basic"
            label="Username"
            variant="standard"
          />
        </Box>
        <Box className={classes.inputContainer}>
          <FormControl
            sx={{ mb: 2, width: '100%' }}
            variant="standard"
            size="small"
          >
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ flex: 1 }}>
            <input type="checkbox" defaultChecked name="remember" /> Remember Me
          </Box>
          <Box sx={{ flex: 1, textAlign: 'end' }}>Forgot password</Box>
        </Box>
        <Button fullWidth variant="contained" startIcon={<LoginIcon />}>
          Login
        </Button>
        <Box className="Sign">
          <Typography component="span">Not yet a member? sign up</Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          Or Login with
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Facebook color="primary" fontSize="large" />
          </Box>
          <Box>
            <Google color="primary" fontSize="large" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
