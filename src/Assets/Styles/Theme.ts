import { createTheme } from '@mui/material/styles';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    'csi-primary': true;
    'csi-secondary': true;
    'csi-warning': true;
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
      ],
    },
  },
});

export default theme;
