import { useState, memo } from 'react';

import {
  CloudSync,
  KeyboardArrowDown,
  CloudUpload,
  CloudDownload,
} from '@mui/icons-material';

import { Stack, Button, MenuItem, NoSsr } from '@mui/material';
import ActionButtonLoading from '../Loading/Skeleton/ActionButtonLoading';

import StyledMenu from '../../Modules/ActionButton/StyledMenu';

function SyncButton() {
  const [openSyncMenu, setOpenSyncMenu] = useState<null | HTMLElement>(null);

  return (
    <NoSsr defer fallback={<ActionButtonLoading />}>
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        flex="1"
        justifyContent="end"
      >
        <Button
          aria-controls={openSyncMenu ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={openSyncMenu ? 'true' : undefined}
          disableElevation
          variant="csi-secondary"
          startIcon={<CloudSync />}
          endIcon={<KeyboardArrowDown />}
          size="small"
          onClick={(event: React.MouseEvent<HTMLElement>) =>
            setOpenSyncMenu(event.currentTarget)
          }
        >
          Sync data
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={openSyncMenu}
          open={Boolean(openSyncMenu)}
          onClose={() => setOpenSyncMenu(null)}
        >
          <MenuItem onClick={() => setOpenSyncMenu(null)} disableRipple>
            <CloudUpload />
            Import
          </MenuItem>
          <MenuItem onClick={() => setOpenSyncMenu(null)} disableRipple>
            <CloudDownload />
            Export
          </MenuItem>
        </StyledMenu>
      </Stack>
    </NoSsr>
  );
}

export default memo(SyncButton);
