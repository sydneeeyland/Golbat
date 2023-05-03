/* eslint-disable no-console */
import { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import LoadingBackdrop from './Components/Loading/LoadingBackdrop';

import { PageNotFound } from './Pages';

import ApplicationStatus from './Middleware/ApplicationStatus';
import ValidateAuth from './Middleware/ValidateAuth';
import ValidatePermission from './Middleware/ValidatePermission';

import { PrivateRoute } from './Constant/Route/Default';

export const Main = lazy(() => import('./Layout/Main'));

export default function App() {
  const Store = useSelector((state) => state);
  console.log(Store);
  return (
    <Router>
      <Suspense fallback={<LoadingBackdrop />}>
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
      </Suspense>
    </Router>
  );
}
