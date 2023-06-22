import {
  Dashboard,
  Packinglist,
  Emptybox,
  DispatchAndDelivery,
  Fleet,
  Roaming,
  Telemarketing
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
    key: 'Telemarketing',
    element: Telemarketing,
    path: '/telemarketing',
  },
];
