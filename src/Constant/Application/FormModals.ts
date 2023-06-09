import { lazy } from 'react';

export const PackinglistForm = lazy(
  () => import('../../Components/Modal/Packinglist/PackinglistForm')
);
export const EmptyBoxForm = lazy(
  () => import('../../Components/Modal/Emptybox/EmptyboxForm')
);
export const DispatchAndDeliveryForm = lazy(
  () =>
    import('../../Components/Modal/DispatchAndDelivery/DispatchAndDeliveryForm')
);
export const FleetForm = lazy(
  () => import('../../Components/Modal/Fleet/FleetForm')
);

export const DepartureForm = lazy(
  () => import('../../Components/Modal/Departure/DepartureForm')
);
export const DepartureBox = lazy(
  () => import('../../Components/Modal/Departure/ImportBoxForm')
);

export const FormModalByModuleType = {
  packinglist: PackinglistForm,
  emptybox: EmptyBoxForm,
  dispatch: DispatchAndDeliveryForm,
  fleet: FleetForm,
  departure: DepartureForm,
  departure_box: DepartureBox,
};

export const config = [];
