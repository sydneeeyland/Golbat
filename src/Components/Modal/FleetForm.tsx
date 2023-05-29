import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from '@mui/material';

import AutoComplete from '../Form/AutoComplete';
import Text from '../Form/Text';

import { Module } from '../../Constant/Application/Module';

type Props = {
  open: boolean;
  close: () => void;
};

function FleetForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="xl">
      <DialogTitle>Fleet Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="truckingCompany"
              label="Trucking Company"
              options={[]}
              module={Module.FLEET}
              required
            />
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="plateNumber" label="Plate #" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="odometer" label="Odometer" module={Module.FLEET} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl lg md xs={12}>
            <Text id="modelNumber" label="Model #" module={Module.FLEET} />
            <AutoComplete
              id="manufacturer"
              label="Manufacturer"
              options={[]}
              module={Module.FLEET}
              required
            />
            <Text id="yearModel" label="Year Model" module={Module.FLEET} />
            <Text id="vanCBM" label="Van CBM (LxWxH)" module={Module.FLEET} />
          </Grid>
          <Grid item xl lg md xs={12}>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="driver" label="Driver" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="driverContactNumber"
                  label="Contact #"
                  module={Module.FLEET}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="helper" label="Helper" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="helperContactNumber"
                  label="Contact #"
                  module={Module.FLEET}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FleetForm;
