// Package
import { useState, memo, useCallback } from 'react';

// Icons
import { CloudSync, AddCircle } from '@mui/icons-material';

// Components
import { Stack, Button, Box } from '@mui/material';

type Props = {
  module: string;
};

function ActionTab({ module }: Props) {
  const [displayModal, setDisplayModal] = useState({
    packinglist: false,
    emptybox: false,
    pickup: false,
  });

  const HandleDisplayModal = useCallback(() => {
    if (!displayModal[module as keyof typeof displayModal]) {
      setDisplayModal((prev) => ({ ...prev, [module]: true }));
    }
  }, [setDisplayModal, module, displayModal]);

  return (
    <Stack direction="row" spacing="3" flexWrap="wrap">
      <Box flex="1" />
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        flex="1"
        justifyContent="end"
      >
        <Button variant="csi-secondary" startIcon={<CloudSync />} size="small">
          Sync data
        </Button>
        <Button
          variant="csi-primary"
          startIcon={<AddCircle />}
          size="small"
          onClick={HandleDisplayModal}
        >
          Add Record
        </Button>
      </Stack>
    </Stack>
  );
}

export default memo(ActionTab);
