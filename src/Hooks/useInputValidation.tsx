import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { RegexExpression } from '../Constant/Application/Validation';
import { handleInputChange } from '../Redux/Slice/transaction-slice';

type Props = {
  id: string;
  value: string;
  validationType?: string;
  module: string;
};

export default function useInputValidation() {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const ValidateInput = ({ id, value, validationType, module }: Props) => {
    const TestInput = new RegExp(
      RegexExpression[validationType as keyof typeof RegexExpression]
    );
    if (TestInput.test(value)) {
      dispatch(handleInputChange({ [id]: value, module }));
      setError(false);
    } else {
      setError(true);
    }
  };

  return { ValidateInput, error };
}
