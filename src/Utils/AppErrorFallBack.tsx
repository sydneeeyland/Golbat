import { Box } from '@mui/material';

export default function AppErrorFallBack() {
  return (
    <Box
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 22,
      }}
    >
      Something went wrong !
    </Box>
  );
}
