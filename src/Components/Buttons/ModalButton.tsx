import { useState, memo, useCallback } from 'react';

import { AddCircle } from '@mui/icons-material';

import { Button, NoSsr } from '@mui/material';

import { FormModalByModuleType } from '../../Constant/Application/FormModals';
import LoadingComponent from '../Loading/LoadingComponent';

type Props = {
  module: string;
  content: string;
  maxWidth: string;
};

function ActionTab({ module, content, maxWidth }: Props) {
  const [displayModal, setDisplayModal] = useState({
    packinglist: false,
    emptybox: false,
    pickup: false,
  });

  const DisplayModal =
    FormModalByModuleType[module as keyof typeof FormModalByModuleType];

  const HandleDisplayModal = useCallback(() => {
    if (!displayModal[module as keyof typeof displayModal]) {
      setDisplayModal((prev) => ({ ...prev, [module]: true }));
    }
  }, [setDisplayModal, module, displayModal]);

  const HandleCloseModal = () => {
    setDisplayModal((prev) => ({ ...prev, [module]: false }));
  };

  return (
    <NoSsr defer fallback={<LoadingComponent />}>
      <Button
        variant="csi-primary"
        startIcon={<AddCircle />}
        size="small"
        onClick={HandleDisplayModal}
      >
        {content}
      </Button>

      <DisplayModal
        open={displayModal[module as keyof typeof displayModal]}
        close={HandleCloseModal}
        maxWidth={maxWidth}
      />
    </NoSsr>
  );
}

export default memo(ActionTab);
