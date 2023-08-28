import { lazy } from 'react';

export const PageNotFound = lazy(() => import('./Error/PageNotFound'));
export const Maintenance = lazy(() => import('./Error/Maintenance'));
export const Unauthorized = lazy(() => import('./Error/Unauthorized'));
