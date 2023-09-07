import { useLayoutEffect, useState } from 'react';

function useValidatePermission() {
  const [userPermission, setUserPermission] = useState<any>();

  useLayoutEffect(() => {
    setUserPermission([
      'Dashboard',
      'Pickups',
      'Emptybox',
      'Packinglist',
      'Invoice',
      'Dispatch & Delivery',
      'Fleet',
      'Roaming',
      'Departure',
      'Telemarketing',
      'Accounts',
      'Common',
      'UserProfile',
    ]);
  }, []);

  return {
    userPermission,
  };
}

export default useValidatePermission;
