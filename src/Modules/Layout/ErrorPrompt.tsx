/* eslint-disable  @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Snackbar, Alert } from '@mui/material';

function ErrorPrompt() {
  const { application } = useSelector((store: any) => store);
  const { error } = application;
  const [errorType, setErrorType] = useState({
    open: false,
    type: '',
    variant: '',
    content: '',
  });

  useEffect(() => {
    if (error) {
      setErrorType(error);
    }
  }, [error]);

  return (
    <Snackbar
      open={errorType.open}
      autoHideDuration={20000}
      onClose={() =>
        setErrorType((prev) => ({
          ...prev,
          open: false,
        }))
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={(errorType.variant as 'warning') || 'success'}
        sx={{ width: '100%' }}
      >
        {errorType.content}
      </Alert>
    </Snackbar>
  );
}

export default ErrorPrompt;
