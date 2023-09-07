import { ReactNode } from 'react';

import { NoSsr } from '@mui/material';

import { Unauthorized } from '../Pages';
import useValidatePermission from '../Hooks/useValidatePermission';

type Props = {
  route: string;
  children: ReactNode;
};

function ValidatePermission({ route, children }: Props) {
  // TODO: FOR API HANDOFF
  const { userPermission } = useValidatePermission();

  return (
    <NoSsr defer>
      {userPermission?.includes(route) ? children : <Unauthorized />}
    </NoSsr>
  );
}

export default ValidatePermission;
