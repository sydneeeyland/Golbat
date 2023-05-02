// Icons
import { CloudUpload, CloudDownload, AddCircle } from '@mui/icons-material';

// Components
import { Stack, Button, Box } from '@mui/material';

function ActionTab() {
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
        <Button
          variant="csi-secondary"
          startIcon={<CloudUpload />}
          size="small"
        >
          Import
        </Button>
        <Button
          variant="csi-secondary"
          startIcon={<CloudDownload />}
          size="small"
        >
          Export
        </Button>
        <Button variant="csi-primary" startIcon={<AddCircle />} size="small">
          Add Record
        </Button>
      </Stack>
    </Stack>
  );
}

export default ActionTab;
