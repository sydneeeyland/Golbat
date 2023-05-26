import { Typography } from '@mui/material';

type Props = {
  label: string;
};

function Heading({ label }: Props) {
  return <Typography sx={{ pb: 1, textAlign: 'center' }}>{label}</Typography>;
}

export default Heading;
