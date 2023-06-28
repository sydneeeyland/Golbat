import Skeleton from '@mui/material/Skeleton';

function TableLoading() {
  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      width="100%"
      height="559.39px"
      sx={{ paddingTop: '8px' }}
    />
  );
}

export default TableLoading;
