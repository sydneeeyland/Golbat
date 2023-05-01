// Package
import { ReactNode } from 'react';

// Components
import { NoSsr } from '@mui/material';

// Pages
import { Unauthorized } from '../Pages';

type Props = {
  route: string;
  children: ReactNode;
};

function ValidatePermission({ route, children }: Props) {
  const permission = ['Dashboard'];
  return (
    <NoSsr defer>
      {permission.includes(route) ? children : <Unauthorized />}
    </NoSsr>
  );
}

export default ValidatePermission;
