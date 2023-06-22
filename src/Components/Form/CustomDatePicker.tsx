import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  label: string;
  disablePast: boolean;
};

function CustomDatePicker({ label, disablePast }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        formatDensity="dense"
        sx={{
          width: '100%',
        }}
        disablePast={disablePast}
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
