import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const top100Films = [
  { title: 'Metro Manila', year: 1 },
  { title: 'Pampanga', year: 2 },
  { title: 'Zambales', year: 3 },
  { title: 'Ilocos', year: 4 },
  { title: 'Test', value: 2 },
  { title: 'Test2', value: 22 },
  { title: 'Test3', value: 23 },
  { title: 'Test4', value: 24 },
];

type Props = {
  id: string;
  label: string;
};

function Tag({ id, label }: Props) {
  return (
    <Autocomplete
      id={id}
      options={top100Films}
      size="small"
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      renderInput={(params) => <TextField {...params} label={label} />}
      multiple
      disableCloseOnSelect
      // onChange={(_, val) => console.log(val)}
      sx={{ pt: 1 }}
    />
  );
}

export default Tag;
