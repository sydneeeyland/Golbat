/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  NoSsr,
  Grid,
} from '@mui/material';
import AutoComplete from '../../Form/AutoComplete';
import Text from '../../Form/Text';
import TextArea from '../../Form/TextArea';
import LoadingComponent from '../../Loading/LoadingComponent';

import {
  Countries,
  CargoType,
  Company,
  cargoSize,
} from '../../../Constant/Application/Common';
import { TextInputTypes } from '../../../Constant/Application/Validation';
import { Module } from '../../../Constant/Application/Module';
import Heading from '../../Form/Heading';

type Props = {
  open: boolean;
  close: () => void;
  maxWidth: any;
};

function PackinglistForm({ open, close, maxWidth }: Props) {
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
                      module={Module.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="cargoType"
                      label="Cargo type"
                      selectedValue={CargoType[0]}
                      options={CargoType}
                      module={Module.PACKINGLIST}
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
                      module={Module.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="agent"
                      label="Agent"
                      options={cargoSize}
                      module={Module.PACKINGLIST}
                      required
                    />
                  </Grid>
                </Grid>
                <Text
                  id="boxNumber"
                  label="Box #"
                  validationType={TextInputTypes.BOX_NO}
                  module={Module.PACKINGLIST}
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="trackingNumber"
                  label="Tracking #"
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="forwarder"
                  label="Forwarder"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <Grid container spacing={2}>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="size"
                      label="Size"
                      options={cargoSize}
                      module={Module.PACKINGLIST}
                      required
                    />
                  </Grid>
                  <Grid item xl lg md xs={12}>
                    <AutoComplete
                      id="equivalent"
                      label="Equivalent"
                      options={cargoSize}
                      module={Module.PACKINGLIST}
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text
                  id="lengthWidthHeight"
                  label="Length | Width | Height"
                  module={Module.PACKINGLIST}
                />
                <Text id="cbm" label="CBM" module={Module.PACKINGLIST} />
                <Text
                  id="serialNumber"
                  label="Serial #"
                  module={Module.PACKINGLIST}
                />
              </Grid>
            </Grid>

            <Grid container spacing={5} pt={1}>
              <Grid item xl lg md xs={12}>
                <Heading label="SENDER" />
                <Text
                  id="lastName_s"
                  label="Last name"
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="firstName_s"
                  label="First name"
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="contactNumber_s"
                  label="Contact #"
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="postalCode_s"
                  label="Postal code"
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="prefecture"
                  label="Prefecture"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="city_jp"
                  label="City"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="town_jp"
                  label="Town"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <TextArea
                  id="address_s"
                  label="Address"
                  module={Module.PACKINGLIST}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Heading label="CONSIGNEE" />
                <Text
                  id="lastName_c"
                  label="Last name"
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="firstName_c"
                  label="First name"
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="contactNumber_c"
                  label="Contact #"
                  validationType={TextInputTypes.CONTACT_PH}
                  module={Module.PACKINGLIST}
                  required
                />
                <Text
                  id="postalCode_c"
                  label="Postal code"
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="province"
                  label="Province"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <AutoComplete
                  id="city_ph"
                  label="City"
                  options={cargoSize}
                  module={Module.PACKINGLIST}
                  required
                />
                <TextArea
                  id="address_c"
                  label="Address"
                  module={Module.PACKINGLIST}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Heading label="OTHERS" />
                <TextArea
                  id="memo"
                  label="Memo"
                  module={Module.PACKINGLIST}
                  required
                />
                <TextArea
                  id="deliveryNotes"
                  label="Delivery notes"
                  module={Module.PACKINGLIST}
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
