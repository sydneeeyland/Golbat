import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { NoSsr, Tabs, Tab, Box, Stack } from '@mui/material';
import BreadCrumb from '../../../Components/BreadCrumb';
import FormContainer from '../../../Components/Container/FormContainer';
import ModalButton from '../../../Components/Buttons/ModalButton';

import ErrorFallback from '../../../Utils/ErrorFallback';

import {
  TabHeader,
  SettingsCommonByIndex,
} from '../../../Constant/Application/SettingsCommon';

function Common() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const DisplayTab = SettingsCommonByIndex[value];

  return (
    <NoSsr defer>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BreadCrumb page="Common" />
      </ErrorBoundary>

      <Box sx={{ bgcolor: 'background.paper', borderRadius: '6px' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {TabHeader.map((key, index) => (
            <Tab key={index} label={key} />
          ))}
        </Tabs>
      </Box>
      <Box
        sx={{
          borderRadius: '6px',
          marginTop: '10px',
        }}
      >
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <FormContainer>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Stack direction="row" spacing="3" flexWrap="wrap">
                <Stack
                  direction="row"
                  gap={2}
                  flexWrap="wrap"
                  flex="1"
                  justifyContent="end"
                >
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <ModalButton
                      module={TabHeader[value].toLocaleLowerCase()}
                      content={`Create ${TabHeader[value]}`}
                      maxWidth="lg"
                    />
                  </ErrorBoundary>
                </Stack>
              </Stack>
            </ErrorBoundary>
          </FormContainer>
          <DisplayTab />
        </ErrorBoundary>
      </Box>
    </NoSsr>
  );
}

export default Common;
