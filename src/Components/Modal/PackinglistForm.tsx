/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  NoSsr,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import AutoComplete from '../Form/AutoComplete';
import Text from '../Form/Text';
import TextArea from '../Form/TextArea';
import LoadingComponent from '../Loading/LoadingComponent';

import {
  Countries,
  CargoType,
  Company,
  cargoSize,
  TextInputTypes,
  reduxModule,
} from '../../Constant/Application/Common';

type Props = {
  open: boolean;
  close: () => void;
  maxWidth: any;
};

function PackinglistForm({ open, close, maxWidth }: Props) {
  // TODO: REFACTOR FORM TO RE-USEABLE VALIDATOR
  return (
    <Dialog open={open} onClose={close} maxWidth={maxWidth} fullWidth>
      <form onSubmit={() => {}}>
        <DialogTitle>Box Details</DialogTitle>
        <NoSsr defer fallback={<LoadingComponent />}>
          <DialogContent>
            <Grid container spacing={5} pt={1}>
              <Grid item xl lg md xs={12}>
                <Grid container spacing={2}>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="origin"
                      label="Origin"
                      selectedValue={Countries[0]}
                      options={Countries}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="cargoType"
                      label="Cargo type"
                      selectedValue={CargoType[0]}
                      options={CargoType}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="company"
                      label="Company"
                      options={Company}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="agent"
                      label="Agent"
                      options={cargoSize}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                </Grid>
                <Text
                  id="boxNumber"
                  label="Box #"
                  inputType={TextInputTypes.BOX_NO}
                  module={reduxModule.PACKINGLIST}
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="trackingNumber"
                  label="Tracking #"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="forwarder"
                  label="Forwarder"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Grid container spacing={2}>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="size"
                      label="Size"
                      options={cargoSize}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="equivalent"
                      label="Equivalent"
                      options={cargoSize}
                      module={reduxModule.PACKINGLIST}
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="lengthWidthHeight"
                  label="Length | Width | Height"
                  module={reduxModule.PACKINGLIST}
                />
                <Text id="cbm" label="CBM" module={reduxModule.PACKINGLIST} />
                <Text
                  id="serialNumber"
                  label="Serial #"
                  module={reduxModule.PACKINGLIST}
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} pt={1}>
              <Grid item xl lg md xs={12}>
                <Typography sx={{ pb: 1, textAlign: 'center' }}>
                  SENDER
                </Typography>
                <Text
                  id="lastName_s"
                  label="Last name"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="firstName_s"
                  label="First name"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="contactNumber_s"
                  label="Contact #"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="postalCode_s"
                  label="Postal code"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="prefecture"
                  label="Prefecture"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="city_jp"
                  label="City"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="town_jp"
                  label="Town"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <TextArea
                  id="address_s"
                  label="Address"
                  module={reduxModule.PACKINGLIST}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Typography sx={{ pb: 1, textAlign: 'center' }}>
                  CONSIGNEE
                </Typography>
                <Text
                  id="lastName_c"
                  label="Last name"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="firstName_c"
                  label="First name"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="contactNumber_c"
                  label="Contact #"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <Text
                  id="postalCode_c"
                  label="Postal code"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="province"
                  label="Province"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="city_ph"
                  label="City"
                  options={cargoSize}
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <TextArea
                  id="address_c"
                  label="Address"
                  module={reduxModule.PACKINGLIST}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Typography sx={{ pb: 1, textAlign: 'center' }}>
                  OTHERS
                </Typography>
                <TextArea
                  id="memo"
                  label="Memo"
                  module={reduxModule.PACKINGLIST}
                  required
                />
                <TextArea
                  id="deliveryNotes"
                  label="Delivery notes"
                  module={reduxModule.PACKINGLIST}
                />
              </Grid>
            </Grid>
          </DialogContent>
        </NoSsr>
        <DialogActions>
          <Button type="submit" variant="csi-primary">
            Save Record
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default PackinglistForm;
