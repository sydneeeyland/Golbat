import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageNotFound } from './Pages';

import { PrivateRoute } from './Routes/Default';
import Loadable from './Components/Loader/Loadable';

export const ValidateAuth = Loadable(
  lazy(() => import('./Utils/ValidateAuth'))
);
export const ValidatePermission = Loadable(
  lazy(() => import('./Utils/ValidatePermission'))
);
export const ApplicationStatus = Loadable(
  lazy(() => import('./Utils/ApplicationStatus'))
);
export const Main = Loadable(lazy(() => import('./Layout/Main')));

export default function App() {
  return (
    <Routes>
      <Route element={<ApplicationStatus />}>
        <Route element={<ValidateAuth />}>
          <Route path="/" element={<Main />}>
            {PrivateRoute.map(({ key, path, element: Page }) => (
              <Route
                key={key}
                path={path}
                element={
                  <ValidatePermission route={key}>
                    <Page />
                  </ValidatePermission>
                }
              />
            ))}
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
