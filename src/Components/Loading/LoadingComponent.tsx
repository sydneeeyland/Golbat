import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingComponent() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingComponent;
