import { ReactNode } from 'react';

import { Box } from '@mui/material';

import { useActionContainerStyles } from '../../Assets/Styles/ContainerStyle';

type Props = {
  children: ReactNode;
};

function FormContainer({ children }: Props) {
  const Container = useActionContainerStyles();

  return <Box className={Container.default}>{children}</Box>;
}

export default FormContainer;
