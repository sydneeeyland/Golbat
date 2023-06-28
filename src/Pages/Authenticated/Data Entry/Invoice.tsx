import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Grid, Box } from '@mui/material';
import BreadCrumb from '../../../Components/BreadCrumb';
import FormContainer from '../../../Components/Container/FormContainer';
import AutoComplete from '../../../Components/Form/AutoComplete';
import Text from '../../../Components/Form/Text';

import ErrorFallback from '../../../Middleware/ErrorFallback';

import { Module } from '../../../Constant/Application/Module';
import { TextInputTypes } from '../../../Constant/Application/Validation';

function Invoice() {
  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Invoice" />
      </ErrorBoundary>
      <FormContainer>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <form>
            <Grid container spacing={5} pt={1} overflow="unset">
              <Grid item xl lg md xs={12}>
                <Text
                  id="boxNumber"
                  label="Box #"
                  module={Module.FLEET}
                  validationType={TextInputTypes.BOX_NO}
                  autoFocus
                />
                <Text id="itemCode" label="Item Code" module={Module.FLEET} />
                <AutoComplete
                  id="item"
                  label="Item"
                  options={[]}
                  module={Module.FLEET}
                  required
                />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="modelName" label="Model name" module={Module.FLEET} />
                <Text id="modelNumber" label="Model #" module={Module.FLEET} />
              </Grid>
              <Grid item xl lg md xs={12}>
                <Text id="quantity" label="Quantity" module={Module.FLEET} />
                <Text id="weight" label="Weight" module={Module.FLEET} />
                <Text id="price" label="Price" module={Module.FLEET} />
              </Grid>
            </Grid>
          </form>
        </ErrorBoundary>
      </FormContainer>
      <Box sx={{ mt: 3 }}>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}></ErrorBoundary> */}
      </Box>
    </NoSsr>
  );
}

export default Invoice;
