import Skeleton from '@mui/material/Skeleton';

function ActionButtonLoading() {
  return (
    <Skeleton
      animation="wave"
      width={142}
      height={55}
      sx={{ marginTop: -1.5 }}
    />
  );
}

export default ActionButtonLoading;
