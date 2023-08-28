import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageNotFound } from './Pages';

import ApplicationStatus from './Utils/ApplicationStatus';
import ValidateAuth from './Utils/ValidateAuth';
import ValidatePermission from './Utils/ValidatePermission';

import { PrivateRoute } from './Routes/Default';

export const Main = lazy(() => import('./Layout/Main'));

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
