import { ErrorBoundary } from 'react-error-boundary';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  NoSsr,
} from '@mui/material';

import AutoComplete from '../../Form/AutoComplete';
import Text from '../../Form/Text';
import FormTable from '../../Table/FormTable';
import ErrorFallback from '../../../Middleware/ErrorFallback';

import { Module } from '../../../Constant/Application/Module';
import TableLoading from '../../Loading/Skeleton/TableLoading';

type Props = {
  open: boolean;
  close: () => void;
};

function ImportBoxForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="xl">
      <DialogTitle>Importing Box to Departure</DialogTitle>
      <DialogContent>
        <Grid container spacing={1} pt={1} overflow="auto">
          <Grid item xl={12} lg={12} md={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <AutoComplete
                  id="shipmentId"
                  label="Shipment"
                  options={[]}
                  module={Module.FLEET}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="boxNo" label="Box #" module={Module.FLEET} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={12} lg={12} md={12} xs={12}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <NoSsr defer fallback={<TableLoading />}>
                <FormTable
                  module={Module.PACKINGLIST}
                  rowActions={false}
                  rowSelection
                  rowFilters={false}
                />
              </NoSsr>
            </ErrorBoundary>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type="submit" variant="csi-primary">
          Save Record
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ImportBoxForm;
