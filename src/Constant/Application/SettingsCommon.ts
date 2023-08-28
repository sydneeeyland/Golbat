import { lazy } from 'react';
import Loadable from '../../Components/Loader/Loadable';

export const TabHeader = [
  'Country',
  'State',
  'City',
  'Town',
  'Company',
  'Agents',
  'Rates',
  'Provincial Rates',
];

export const Country = Loadable(lazy(
  () => import('../../Modules/Settings/Common/Country')
));
export const JapanState = Loadable(lazy(
  () => import('../../Modules/Settings/Common/JapanState')
));
export const JapanCity = Loadable(lazy(
  () => import('../../Modules/Settings/Common/JapanCity')
));
export const JapanTown = Loadable(lazy(
  () => import('../../Modules/Settings/Common/JapanTown')
));
export const Company = Loadable(lazy(
  () => import('../../Modules/Settings/Common/Company')
));
export const Agents = Loadable(lazy(
  () => import('../../Modules/Settings/Common/Agents')
));
export const Rates = Loadable(lazy(() => import('../../Modules/Settings/Common/Rates')));

export const SettingsCommonByIndex = [
  Country,
  JapanState,
  JapanCity,
  JapanTown,
  Company,
  Agents,
  Rates,
];
