import { lazy } from 'react';
import Loadable from '../Components/Loader/Loadable';

export const Dashboard = Loadable(lazy(() => import('../Pages/Authenticated/Dashboard')));

export const Packinglist = Loadable(lazy(
  () => import('../Pages/Authenticated/Data Entry/Packinglist')
));
export const Emptybox = Loadable(lazy(
  () => import('../Pages/Authenticated/Data Entry/Emptybox')
));
export const Pickups = Loadable(lazy(() => import('../Pages/Authenticated/Data Entry/Pickups')));
export const Invoice = Loadable(lazy(() => import('../Pages/Authenticated/Data Entry/Invoice')));

export const DispatchAndDelivery = Loadable(lazy(
  () => import('../Pages/Authenticated/Delivery/DispatchAndDelivery')
));
export const Fleet = Loadable(lazy(() => import('../Pages/Authenticated/Delivery/Fleet')));
export const Roaming = Loadable(lazy(() => import('../Pages/Authenticated/Delivery/Roaming')));

export const Departure = Loadable(lazy(() => import('../Pages/Authenticated/Departure')));

export const Telemarketing = Loadable(lazy(
  () => import('../Pages/Authenticated/Telemarketing')
));

export const Common = Loadable(lazy(() => import("../Pages/Authenticated/Settings/Common")));
export const Accounts = Loadable(lazy(() => import("../Pages/Authenticated/Settings/Accounts")));
export const UserProfile = Loadable(lazy(() => import("../Pages/Authenticated/Settings/User/Profile")));

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
  {
    key: 'Common',
    element: Common,
    path: '/settings/common',
  },
  {
    key: 'Accounts',
    element: Accounts,
    path: '/settings/accounts',
  },
  {
    key: 'UserProfile',
    element: UserProfile,
    path: '/user/profile',
  },
];
