import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

function BreadCrumbLoading() {
  return (
    <Box sx={{ width: 180, marginBottom: '20px' }}>
      <Skeleton animation="wave" />
    </Box>
  );
}

export default BreadCrumbLoading;
