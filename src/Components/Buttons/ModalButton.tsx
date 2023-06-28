import { useState, memo, useCallback, ReactNode } from 'react';

import { AddCircle } from '@mui/icons-material';

import { Button, NoSsr } from '@mui/material';

import { FormModalByModuleType } from '../../Constant/Application/FormModals';
import ActionButtonLoading from '../Loading/Skeleton/ActionButtonLoading';

type Props = {
  module: string;
  content: string;
  maxWidth: string;
  variant?: string;
  icon?: ReactNode;
};

function ActionTab({ module, content, maxWidth, variant, icon }: Props) {
  const [displayModal, setDisplayModal] = useState({
    packinglist: false,
    emptybox: false,
    pickup: false,
    dispatch: false,
    fleet: false,
    departure: false,
    departure_box: false,
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
    <NoSsr defer fallback={<ActionButtonLoading />}>
      <Button
        variant={variant as 'csi-primary'}
        startIcon={icon}
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

ActionTab.defaultProps = {
  variant: 'csi-primary',
  icon: <AddCircle />,
};

export default memo(ActionTab);
