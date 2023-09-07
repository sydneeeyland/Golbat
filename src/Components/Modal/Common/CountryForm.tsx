import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
} from '@mui/material';

import Text from '../../Form/Text';

import { Module } from '../../../Constant/Application/Module';

type Props = {
  open: boolean;
  close: () => void;
};

function CountryForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
      <DialogTitle>Country</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <Text id="code" label="Code" module={Module.COUNTRY} required />
            <Text id="name" label="Name" module={Module.COUNTRY} required />
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

export default CountryForm;
