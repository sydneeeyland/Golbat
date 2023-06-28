import { useDispatch } from 'react-redux';

import { Autocomplete, TextField } from '@mui/material';

import { handleInputChange } from '../../Redux/Slice/transaction-slice';

type Props = {
  id: string;
  options: readonly unknown[];
  label: string;
  selectedValue?: unknown;
  required?: boolean;
  module: string;
};

function AutoComplete({
  id,
  options,
  label,
  selectedValue,
  required,
  module,
}: Props) {
  const dispatch = useDispatch();
  return (
    <Autocomplete
      id={id}
      size="small"
      options={options}
      defaultValue={selectedValue}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )}
      autoHighlight
      disablePortal
      ListboxProps={{ style: { maxHeight: 110 } }}
      sx={{ pb: 1 }}
      onChange={(_, { value }: any) =>
        dispatch(handleInputChange({ [id]: value, module }))
      }
    />
  );
}

AutoComplete.defaultProps = {
  selectedValue: null,
  required: false,
};

export default AutoComplete;
