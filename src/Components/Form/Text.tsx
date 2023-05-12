import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';
import {
  TextInputTypes,
  RegexByInputType,
  InvalidFeedback,
} from '../../Constant/Application/Common';

import { handleInputChange } from '../../Redux/Slice/transaction-slice';

type Props = {
  id: string;
  label: string;
  autoFocus?: boolean;
  required?: boolean;
  inputType?: string;
  module: string;
};

function Text({ id, label, autoFocus, required, inputType, module }: Props) {
  const dispatch = useDispatch();

  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ pb: 1 }}
      inputProps={{
        pattern: RegexByInputType[inputType as keyof typeof RegexByInputType],
        title: InvalidFeedback[inputType as keyof typeof InvalidFeedback],
      }}
      onBlur={(e) =>
        e.target.value !== '' &&
        dispatch(handleInputChange({ [id]: e.target.value, module }))
      }
      autoFocus={autoFocus}
      required={required}
    />
  );
}

Text.defaultProps = {
  autoFocus: false,
  required: false,
  inputType:
    RegexByInputType[TextInputTypes.DEFAULT as keyof typeof RegexByInputType],
};

export default Text;
