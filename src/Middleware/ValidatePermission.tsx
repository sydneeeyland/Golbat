import { ReactNode } from 'react';

import { NoSsr } from '@mui/material';

import { Unauthorized } from '../Pages';

type Props = {
  route: string;
  children: ReactNode;
};

function ValidatePermission({ route, children }: Props) {
  // TODO: FOR API HANDOFF
  const permission = [
    'Dashboard',
    'Packinglist',
    'Emptybox',
    'Dispatch & Delivery',
    'Fleet',
    'Telemarketing',
  ];
  return (
    <NoSsr defer>
      {permission.includes(route) ? children : <Unauthorized />}
    </NoSsr>
  );
}

export default ValidatePermission;
