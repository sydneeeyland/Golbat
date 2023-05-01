// Package
import { memo } from 'react';

// Component
import { Box, Alert } from '@mui/material';

type Props = {
  error: {
    stack: string;
    message: string;
  };
};

function ErrorFallback({ error }: Props) {
  const errorTrace = [error];
  const component = errorTrace[0].stack.split(' ')[9];

  return (
    <Box>
      <Alert severity="error">
        Something went wrong —{' '}
        <code>{`${error.message}, trace component: <${component} /> - view console for full log`}</code>
      </Alert>
    </Box>
  );
}

export default memo(ErrorFallback);
