import { Dashboard, Packinglist, Emptybox } from '../../Pages';

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
];
