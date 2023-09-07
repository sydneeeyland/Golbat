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

function TownForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
      <DialogTitle>Town</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="state"
              label="State"
              options={[]}
              module={Module.TOWN}
              required
            />
            <AutoComplete
              id="city"
              label="City"
              options={[]}
              module={Module.TOWN}
              required
            />
            <Text
              id="postalCode"
              label="Postal Code"
              module={Module.TOWN}
              required
            />
            <Text
              id="hiragana"
              label="Hiragana"
              module={Module.TOWN}
              required
            />
            <Text id="kanji" label="Kanji" module={Module.TOWN} required />
            <Text id="english" label="English" module={Module.TOWN} required />
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

export default TownForm;
