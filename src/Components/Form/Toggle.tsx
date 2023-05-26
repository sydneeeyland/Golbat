import { useDispatch } from 'react-redux';

import { FormControlLabel, Switch } from '@mui/material';

import { handleInputChange } from '../../Redux/Slice/transaction-slice';

type Props = {
  id: string;
  label: string;
  module: string;
};

function Toggle({ id, label, module }: Props) {
  const dispatch = useDispatch();
  return (
    <FormControlLabel
      id={id}
      label={label}
      onChange={(_, val) => dispatch(handleInputChange({ [id]: val, module }))}
      control={<Switch color="primary" />}
      labelPlacement="end"
    />
  );
}

export default Toggle;
