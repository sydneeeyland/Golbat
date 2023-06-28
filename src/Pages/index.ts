// Package
import { lazy } from 'react';

// Error Page
export const PageNotFound = lazy(() => import('./Error/PageNotFound'));
export const Maintenance = lazy(() => import('./Error/Maintenance'));
export const Unauthorized = lazy(() => import('./Error/Unauthorized'));

// Authentication
export const SignIn = lazy(() => import('./Authentication/SignIn'));

// Authenticated
export const Dashboard = lazy(() => import('./Authenticated/Dashboard'));

// Data Entry
export const Packinglist = lazy(
  () => import('./Authenticated/Data Entry/Packinglist')
);
export const Emptybox = lazy(
  () => import('./Authenticated/Data Entry/Emptybox')
);
export const Pickups = lazy(() => import("./Authenticated/Data Entry/Pickups"));
export const Invoice = lazy(() => import('./Authenticated/Data Entry/Invoice'));

// Delivery
export const DispatchAndDelivery = lazy(
  () => import('./Authenticated/Delivery/DispatchAndDelivery')
);
export const Fleet = lazy(() => import('./Authenticated/Delivery/Fleet'));
export const Roaming = lazy(() => import('./Authenticated/Delivery/Roaming'));

// Departure
export const Departure = lazy(() => import("./Authenticated/Departure"));

// Telemarketing
export const Telemarketing = lazy(
  () => import('./Authenticated/Telemarketing')
);
