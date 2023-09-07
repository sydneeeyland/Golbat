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

import { Module } from '../../../Constant/Application/Module';

type Props = {
  open: boolean;
  close: () => void;
};

function CityForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
      <DialogTitle>City</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="state"
              label="State"
              options={[]}
              module={Module.CITY}
              required
            />
            <Text
              id="hiragana"
              label="Hiragana"
              module={Module.CITY}
              required
            />
            <Text id="kanji" label="Kanji" module={Module.CITY} required />
            <Text id="english" label="English" module={Module.CITY} required />
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

export default CityForm;
