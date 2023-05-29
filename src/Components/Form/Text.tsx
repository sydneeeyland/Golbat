import { TextField } from '@mui/material';

import {
  TextInputTypes,
  RegexExpression,
  InvalidFeedback,
} from '../../Constant/Application/Validation';

import useInputValidation from '../../Hooks/useInputValidation';

type Props = {
  id: string;
  label: string;
  autoFocus?: boolean;
  required?: boolean;
  validationType?: string;
  module: string;
};

function Text({
  id,
  label,
  autoFocus,
  required,
  validationType,
  module,
}: Props) {
  const { ValidateInput, error } = useInputValidation();

  return (
    <TextField
      id={id}
      label={label}
      variant="outlined"
      size="small"
      fullWidth
      sx={{ pb: 1 }}
      inputProps={{
        pattern:
          RegexExpression[validationType as keyof typeof RegexExpression],
      }}
      onInput={(e) => (e.target as HTMLInputElement).setCustomValidity('')}
      onInvalid={(e) =>
        (e.target as HTMLInputElement).setCustomValidity(
          InvalidFeedback[validationType as keyof typeof InvalidFeedback] ||
            'Cannot be empty'
        )
      }
      onBlur={(e) => {
        const { value } = e.target;
        ValidateInput({ id, value, validationType, module });
      }}
      error={error}
      autoFocus={autoFocus}
      required={required}
    />
  );
}

Text.defaultProps = {
  autoFocus: false,
  required: false,
  validationType:
    RegexExpression[TextInputTypes.DEFAULT as keyof typeof RegexExpression],
};

export default Text;
