import { lazy } from 'react';

export const PackinglistForm = lazy(
  () => import('../../Components/Modal/PackinglistForm')
);
export const EmptyBoxForm = lazy(
  () => import('../../Components/Modal/EmptyboxForm')
);
export const DispatchAndDeliveryForm = lazy(
  () => import('../../Components/Modal/DispatchAndDeliveryForm')
);
export const FleetForm = lazy(() => import('../../Components/Modal/FleetForm'));

export const FormModalByModuleType = {
  packinglist: PackinglistForm,
  emptybox: EmptyBoxForm,
  dispatch: DispatchAndDeliveryForm,
  fleet: FleetForm,
};

export const config = [];
