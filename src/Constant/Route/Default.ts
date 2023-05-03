/* eslint-disable import/prefer-default-export */
// Pages
import { Dashboard, Packinglist } from '../../Pages';

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
];
