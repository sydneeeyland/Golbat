import { ReactNode } from 'react';

import { Container } from '@mui/material';

import { useActionContainerStyles } from '../../Assets/Styles/ContainerStyle';

type Props = {
  children: ReactNode;
};

function FormContainer({ children }: Props) {
  const Containers = useActionContainerStyles();

  return (
    <Container className={Containers.default} maxWidth={false}>
      {children}
    </Container>
  );
}

export default FormContainer;
