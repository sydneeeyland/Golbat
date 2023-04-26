/* eslint-disable import/prefer-default-export */
import { makeStyles } from '@mui/styles';

export const useMaintenanceStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  descriptionBox: {
    margin: '60px 0 60px 0',
  },
  descriptionContent: {
    textAlign: 'center',
  },
});
