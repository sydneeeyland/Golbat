import { ReactNode } from 'react';

import { Box } from '@mui/material';

type Props = {
  id: string;
  children: ReactNode;
  className: string;
};

function ComponentWrapper({ id, children, className }: Props) {
  return (
    <Box id={id} className={className}>
      {children}
    </Box>
  );
}

export default ComponentWrapper;
