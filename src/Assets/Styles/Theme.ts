import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'csi-primary': true;
    'csi-secondary': true;
    'csi-warning': true;
    'csi-danger': true;
  }
}

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'csi-primary' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#00A3FF',
            lineHeight: 'unset',
            fontFamily: 'unset',
            padding: '6px 11px',
            '&:hover': {
              backgroundColor: '#008BD9',
            },
            '&:disabled': {
              color: 'black',
              backgroundColor: 'white',
              border: '1px solid whitesmoke',
            },
          },
        },
        {
          props: { variant: 'csi-secondary' },
          style: {
            color: '#3F4254',
            backgroundColor: '#E1E3EA',
            lineHeight: 'unset',
            fontFamily: 'unset',
            padding: '6px 11px',
            '&:hover': {
              backgroundColor: '#B5B5C3',
            },
          },
        },
        {
          props: { variant: 'csi-warning' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#ffc700',
            lineHeight: 'unset',
            fontFamily: 'unset',
            padding: '6px 11px',
            '&:hover': {
              backgroundColor: '#f1bc00',
            },
          },
        },
        {
          props: { variant: 'csi-danger' },
          style: {
            color: '#FFFFFF',
            backgroundColor: '#ff4d4f',
            lineHeight: 'unset',
            fontFamily: 'unset',
            padding: '6px 11px',
            '&:hover': {
              backgroundColor: '#a8071a',
            },
          },
        },
      ],
    },
  },
});

export default theme;
