import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

import { handleInputChange } from '../../Redux/Slice/transaction-slice';

type Props = {
  label: string;
  autoFocus?: boolean;
  required?: boolean;
  id: string;
  module: string;
};

function TextArea({ id, label, autoFocus, required, module }: Props) {
  const dispatch = useDispatch();
  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      fullWidth
      multiline
      rows={2}
      onBlur={(e) =>
        e.target.value !== '' &&
        dispatch(handleInputChange({ [id]: e.target.value, module }))
      }
      autoFocus={autoFocus}
      sx={{ pb: 1 }}
      required={required}
    />
  );
}

TextArea.defaultProps = {
  autoFocus: false,
  required: false,
};

export default TextArea;
