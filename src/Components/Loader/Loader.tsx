import { LinearProgress, Box, NoSsr } from '@mui/material';

function Loader() {
  return (
    <NoSsr defer>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 2001,
          width: '100%',
        }}
      >
        <LinearProgress color="primary" />
      </Box>
    </NoSsr>
  );
}

export default Loader;
