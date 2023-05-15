import { lazy } from 'react';

export const PackinglistForm = lazy(
  () => import('../../Components/Modal/PackinglistForm')
);
export const EmptyBoxForm = lazy(
  () => import('../../Components/Modal/EmptyboxForm')
);

export const FormModalByModuleType = {
  packinglist: PackinglistForm,
  emptybox: EmptyBoxForm,
};

export const config = [];
