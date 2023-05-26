import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

type Props = {
  label: string;
};

function CustomDatePicker({ label }: Props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        formatDensity="dense"
        sx={{
          width: '100%',
        }}
        disablePast
      />
    </LocalizationProvider>
  );
}

export default CustomDatePicker;
