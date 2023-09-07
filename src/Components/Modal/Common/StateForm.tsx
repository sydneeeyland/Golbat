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

function StateForm({ open, close }: Props) {
  return (
    <Dialog open={open} onClose={close} fullWidth maxWidth="sm">
      <DialogTitle>State</DialogTitle>
      <DialogContent>
        <Grid container spacing={5} pt={1} overflow="unset">
          <Grid item xl lg md xs={12}>
            <AutoComplete
              id="country"
              label="Country"
              options={[]}
              module={Module.STATE}
              required
            />
            <Text
              id="hiragana"
              label="Hiragana"
              module={Module.STATE}
              required
            />
            <Text id="kanji" label="Kanji" module={Module.STATE} required />
            <Text id="english" label="English" module={Module.STATE} required />
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

export default StateForm;
