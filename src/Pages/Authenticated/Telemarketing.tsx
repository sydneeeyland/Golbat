import { ErrorBoundary } from 'react-error-boundary';

import {
  NoSsr,
  Button,
  Stack,
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
} from '@mui/material';
import { FilterList, Close, Search } from '@mui/icons-material';
import BreadCrumb from '../../Components/BreadCrumb';
import FormContainer from '../../Components/Container/FormContainer';
import CustomDatePicker from '../../Components/Form/CustomDatePicker';
import AutoComplete from '../../Components/Form/AutoComplete';

import useWebSocket from '../../Hooks/useWebSocket';
import useTelemarketing from '../../Hooks/Service/useTelemarketing';
import ErrorFallback from '../../Utils/ErrorFallback';
import ContactList from '../../Modules/Telemarketing/ContactList';

function Telemarketing() {
  const { list, filteredContactList } = useWebSocket();
  const { toggleFilterDrawer, handleToggleFilterDrawer } = useTelemarketing();
  // TODO: Websocket function, needs API to proceed
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Telemarketing" />
      </ErrorBoundary>
      <FormContainer>
        <Stack
          direction="row"
          gap={2}
          flexWrap="wrap"
          flex="1"
          justifyContent="end"
        >
          <Button
            variant="csi-secondary"
            startIcon={<FilterList />}
            size="small"
            onClick={handleToggleFilterDrawer}
          >
            Filter
          </Button>
        </Stack>
      </FormContainer>
      <FormContainer>
        <ContactList contacts={list} />
      </FormContainer>

      <Drawer
        anchor="right"
        open={toggleFilterDrawer}
        variant="temporary"
        sx={{ position: 'relative' }}
      >
        <Box width="250px" p="10px">
          <Stack direction="row" justifyContent="space-between" mb="10px">
            <Typography variant="h6">Filters option</Typography>
            <IconButton
              aria-label="delete"
              size="small"
              onClick={handleToggleFilterDrawer}
            >
              <Close fontSize="small" />
            </IconButton>
          </Stack>
          <Divider />
          <Box mt="20px" display="flex" gap="10px" flexDirection="column">
            <CustomDatePicker label="Start Date" disablePast={false} />
            <CustomDatePicker label="End Date" disablePast={false} />
          </Box>
          <Box mt="10px" display="flex" gap="5px" flexDirection="column">
            <AutoComplete id="company" label="Company" options={[]} module="" />
            <AutoComplete id="agent" label="Agent" options={[]} module="" />
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom="10px"
          width="100%"
          padding="10px 10px 0 10px"
        >
          <Button
            variant="csi-secondary"
            startIcon={<Search />}
            size="small"
            onClick={filteredContactList}
            fullWidth
          >
            Filter data
          </Button>
        </Box>
      </Drawer>
    </NoSsr>
  );
}

export default Telemarketing;
