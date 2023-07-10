import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  NoSsr,
} from '@mui/material';
import Text from '../Form/Text';

import { LineNumbers, RowNumbers, Stacks, } from '../../Constant/Application/Common';
import { Module } from '../../Constant/Application/Module';
import { TextInputTypes } from '../../Constant/Application/Validation';
import LoadingComponent from '../Loading/LoadingComponent';
import AutoComplete from '../Form/AutoComplete';

type Props = {
  open: boolean;
  close: () => void;
  maxWidth: any;
};

function EmptyBoxForm({ open, close, maxWidth }: Props) {
  return (
    <Dialog open={open} onClose={close} maxWidth={maxWidth} fullWidth>
      <form onSubmit={() => {}}>
        <DialogTitle>New Roaming</DialogTitle>
        <NoSsr defer fallback={<LoadingComponent />}>
          <DialogContent>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid container spacing={5} pt={2}>
                <Grid item xl lg md xs={12}>
                  <Grid container spacing={0}>
                    <Grid item xl lg md xs={12}>
                      <Text
                        id="boxNumber"
                        label="Box #"
                        validationType={TextInputTypes.BOX_NO}
                        module={Module.ROAMING}
                        autoFocus
                        required
                      />
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xl lg md xs={12}>
                        <Text
                          id="MaxStack"
                          label="Max Stack"
                          validationType={TextInputTypes.BOX_NO}
                          module={Module.ROAMING}
                          autoFocus
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xl lg md xs={12}>
                        <AutoComplete
                          id="RowNumber"
                          label="Row #"
                          options={RowNumbers}
                          module={Module.ROAMING}
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xl lg md xs={12}>
                        <AutoComplete
                          id="LineNumber"
                          label="Line #"
                          options={LineNumbers}
                          module={Module.ROAMING}
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xl lg md xs={12}>
                        <AutoComplete
                          id="Stack"
                          label="Stack #"
                          options={Stacks}
                          module={Module.ROAMING}
                          required
                        />
                      </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                      <Grid item xl lg md xs={12}>
                        <Text
                          id="Barcode"
                          label="Barcode"
                          validationType={TextInputTypes.BOX_NO}
                          module={Module.ROAMING}
                          autoFocus
                          required
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </NoSsr>
        <DialogActions>
          <Button onClick={close}>Close</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default EmptyBoxForm;
