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
import Tag from '../Form/Tag';
import CustomDatePicker from '../Form/CustomDatePicker';

import { Module } from '../../Constant/Application/Common';
import TextArea from '../Form/TextArea';
import Toggle from '../Form/Toggle';

type Props = {
  open: boolean;
  close: () => void;
};

function DispatchAndDeliveryForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="xl">
      <DialogTitle>Delivery Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="fleet"
              label="Fleet"
              options={[]}
              module={Module.DISPATCH}
              required
            />
            <AutoComplete
              id="truckingCompany"
              label="Trucking"
              options={[]}
              module={Module.DISPATCH}
              required
            />
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <Text id="driver" label="Driver" module={Module.DISPATCH} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="helper" label="Helper" module={Module.DISPATCH} />
              </Grid>
            </Grid>
            <Text
              id="contactNumber"
              label="Contact #"
              module={Module.DISPATCH}
            />
          </Grid>
          <Grid item xl lg md xs={12}>
            <Grid container spacing={2}>
              <Grid item xl lg md xs={12}>
                <CustomDatePicker id="startDate" label="Start Date" />
              </Grid>
              <Grid item xl lg md xs={12}>
                <CustomDatePicker id="endDate" label="End Date" />
              </Grid>
            </Grid>
            <Tag id="areas" label="Areas" />
          </Grid>
          <Grid item xl lg md xs={12}>
            <TextArea id="memo" label="Memo" module="Dispatch" />
            <Toggle
              id="isWhseToPier"
              label="Warehouse to Pier"
              module={Module.DISPATCH}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DispatchAndDeliveryForm;
