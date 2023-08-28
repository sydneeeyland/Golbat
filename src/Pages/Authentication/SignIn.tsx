/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

import {
  Grid,
  Card,
  Typography,
  Stack,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { Form } from 'react-bootstrap';

import { Facebook } from '@mui/icons-material';

import useValidateAuth from '../../Hooks/useValidateAuth';

export default function SignIn() {
  const userEmail: any = useRef();
  const userPassword: any = useRef();
  const { authState, validateAuth } = useValidateAuth();

  useEffect(() => {
    document.title = 'Chenvel Services Inc ';
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateAuth({
          email: userEmail.current.value,
          password: userPassword.current.value,
        });
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexBasis={1}
        height="100vh"
        sx={{ backgroundColor: 'whitesmoke' }}
      >
        <Grid item>
          <Card
            variant="elevation"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              margin: '24px',
              overflow: 'hidden',
              position: 'relative',
              border: 'none rgb(230, 235, 241)',
              borderRadius: '6px',
              boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 4px',
              width: '450px',
            }}
          >
            <Box sx={{ padding: '32px' }}>
              <Stack flexDirection="row" display="flex" spacing="4px">
                <Typography flex={1} variant="h5">
                  Login
                </Typography>
                <Typography
                  flex={1}
                  sx={{ fontSize: '0.875rem', textAlign: 'end' }}
                >
                  Don&apos;t have an account?
                </Typography>
              </Stack>
              <Stack
                flexDirection="column"
                spacing="4px"
                sx={{ marginTop: '24px' }}
              >
                <Typography>Employee ID</Typography>
                <Form.Control type="text" ref={userEmail} required />
              </Stack>
              <Stack
                flexDirection="column"
                spacing="4px"
                sx={{ marginTop: '24px' }}
              >
                <Typography>Password</Typography>
                <Form.Control type="password" ref={userPassword} required />
              </Stack>
              <Stack
                flexDirection="row"
                spacing="3px"
                sx={{ marginTop: '24px' }}
              >
                <Stack spacing="3px" gap="6px" flexDirection="row">
                  <input type="checkbox" />
                  <Typography>Keep me Signed in</Typography>
                </Stack>
                <Typography flex={1} textAlign="end">
                  Forgot Password?
                </Typography>
              </Stack>
              <Box sx={{ marginTop: '24px' }}>
                <Button
                  type="submit"
                  variant="csi-primary"
                  sx={{ padding: '10px' }}
                  fullWidth
                  disabled={authState.loading || authState.status === 200}
                >
                  {authState.loading ? <CircularProgress size={20} /> : 'Login'}
                </Button>
              </Box>
              <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
                <Typography
                  sx={{
                    marginBottom: '15px',
                    color: '#A9A9A9',
                    fontSize: '14px',
                  }}
                >
                  OR
                </Typography>
                <Button
                  startIcon={<Facebook />}
                  type="button"
                  variant="csi-social-facebook"
                  sx={{ padding: '10px' }}
                  fullWidth
                >
                  Facebook
                </Button>
              </Box>
            </Box>
            <Typography align="center" mb="5px" color="#A9A9A9" fontSize="11px">
              v1.0.0
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Snackbar
        open={authState.status === 400}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" sx={{ width: '100%' }}>
          {authState.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={authState.status === 200}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {authState.message}
        </Alert>
      </Snackbar>
    </form>
  );
}
