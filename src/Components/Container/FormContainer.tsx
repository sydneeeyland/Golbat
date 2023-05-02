// Package
import { ReactNode } from 'react';

// Components
import { Box } from '@mui/material';

// Styles
import { useActionContainerStyles } from '../../Assets/Styles/ContainerStyle';

type Props = {
  children: ReactNode;
};

function FormContainer({ children }: Props) {
  const Container = useActionContainerStyles();

  return <Box className={Container.default}>{children}</Box>;
}

export default FormContainer;
