import {
  Dashboard,
  Packinglist,
  Emptybox,
  Pickups,
  Invoice,
  DispatchAndDelivery,
  Fleet,
  Roaming,
  Departure,
  Telemarketing,
} from '../../Pages';

export const PrivateRoute = [
  {
    key: 'Dashboard',
    element: Dashboard,
    path: '/',
  },
  {
    key: 'Packinglist',
    element: Packinglist,
    path: '/entry/packinglist',
  },
  {
    key: 'Emptybox',
    element: Emptybox,
    path: '/entry/emptybox',
  },
  {
    key: 'Pickups',
    element: Pickups,
    path: '/entry/pickups',
  },
  {
    key: 'Invoice',
    element: Invoice,
    path: '/entry/invoice',
  },
  {
    key: 'Dispatch & Delivery',
    element: DispatchAndDelivery,
    path: '/warehouse/dispatch',
  },
  {
    key: 'Fleet',
    element: Fleet,
    path: '/warehouse/fleet',
  },
  {
    key: 'Roaming',
    element: Roaming,
    path: '/warehouse/roaming',
  },
  {
    key: 'Departure',
    element: Departure,
    path: '/Departure',
  },
  {
    key: 'Telemarketing',
    element: Telemarketing,
    path: '/telemarketing',
  },
];
