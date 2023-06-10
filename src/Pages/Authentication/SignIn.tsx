import { Grid, Card, Typography, Stack, Box, Button } from '@mui/material';
import { Form } from 'react-bootstrap';

function SignIn() {
  return (
    <Grid
      container
      xs={12}
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
            borderRadius: '4px',
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 4px',
            width: '400px',
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
              <Form.Control type="text" />
            </Stack>
            <Stack
              flexDirection="column"
              spacing="4px"
              sx={{ marginTop: '24px' }}
            >
              <Typography>Password</Typography>
              <Form.Control type="password" />
            </Stack>
            <Stack flexDirection="row" spacing="3px" sx={{ marginTop: '24px' }}>
              <Stack spacing="3px" gap="6px" flexDirection="row">
                <input type="checkbox" />
                <Typography>Keep me Signed in</Typography>
              </Stack>
              <Typography flex={1} textAlign="end">
                Forgot Password?
              </Typography>
            </Stack>
            <Box sx={{ marginTop: '24px' }}>
              <Button variant="csi-primary" sx={{ padding: '10px' }} fullWidth>
                Login
              </Button>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SignIn;
