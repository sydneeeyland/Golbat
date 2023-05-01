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
export const Packinglist = lazy(() => import('./Authenticated/Packinglist'));
