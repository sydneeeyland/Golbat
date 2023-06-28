import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from '@mui/material';

import AutoComplete from '../../Form/AutoComplete';
import Text from '../../Form/Text';
import CustomDatePicker from '../../Form/CustomDatePicker';
import TextArea from '../../Form/TextArea';

import { Module } from '../../../Constant/Application/Module';

type Props = {
  open: boolean;
  close: () => void;
};

function DepartureForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="xl">
      <DialogTitle>Departure Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="countryOrigin"
              label="Country Origin"
              options={[]}
              module={Module.FLEET}
              required
            />
            <AutoComplete
              id="company"
              label="Company"
              options={[]}
              module={Module.FLEET}
              required
            />
            <AutoComplete
              id="vessel"
              label="Vessel"
              options={[]}
              module={Module.FLEET}
              required
            />
            <Text id="origin" label="Port Origin" module={Module.FLEET} />
            <AutoComplete
              id="destination"
              label="Port Destination"
              options={[]}
              module={Module.FLEET}
              required
            />
          </Grid>
          <Grid item xl lg md xs={12}>
            <CustomDatePicker label="Pier ETA" disablePast />
            <Grid container spacing={2} pt="8px" pb="8px">
              <Grid item xl lg md xs={12}>
                <CustomDatePicker label="Departure" disablePast />
              </Grid>
              <Grid item xl lg md xs={12}>
                <CustomDatePicker label="Estimated Arrival" disablePast />
              </Grid>
            </Grid>
            <Text
              id="containerNo"
              label="Container No(s)."
              module={Module.FLEET}
            />
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="tenFt" label="10 FT" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="twentyFt" label="20 FT" module={Module.FLEET} />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="thirtyFt" label="30 FT" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="fourtyFt" label="40 FT" module={Module.FLEET} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl lg md xs={12}>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text
                  id="tagNo"
                  label="Lading/AWB/Tag/No."
                  module={Module.FLEET}
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="regNo"
                  label="Registration No."
                  module={Module.FLEET}
                />
              </Grid>
            </Grid>
            <Text id="weight" label="Weight" module={Module.FLEET} />
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text
                  id="broker"
                  label="Broker / Representative"
                  module={Module.FLEET}
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="brokerTin" label="Tin No." module={Module.FLEET} />
              </Grid>
            </Grid>
            <TextArea
              id="brokerAddress"
              label="Address"
              module={Module.FLEET}
            />
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

export default DepartureForm;
