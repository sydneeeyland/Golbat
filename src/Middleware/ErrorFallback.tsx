import { memo } from 'react';

import { Box, Alert } from '@mui/material';

type Props = {
  error: {
    stack: string;
    message: string;
  };
};

function ErrorFallback({ error }: Props) {
  const errorTrace = [error] || 'Unknown Trace';
  const component = errorTrace[0]?.stack.split(' ')[9] || 'Unknown Component';

  return (
    <Box>
      <Alert severity="error">
        Something went wrong —{' '}
        <code>{`${error.message}, trace component: <${component} />`}</code>
      </Alert>
    </Box>
  );
}

export default memo(ErrorFallback);
