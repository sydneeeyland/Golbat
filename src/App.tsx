// Package
import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import LoadingBackdrop from './Components/Loading/LoadingBackdrop';

// Pages
import { PageNotFound } from './Pages';

// Middleware
import ApplicationStatus from './Middleware/ApplicationStatus';

// Constant
import { DefaultRoute } from './Constant/Route/Default';

// Layout
export const Main = lazy(() => import('./Layout/Main'));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingBackdrop />}>
        <Routes>
          <Route
            path="/"
            element={
              <ApplicationStatus>
                <Main />
              </ApplicationStatus>
            }
          >
            {DefaultRoute.map(({ key, path, element: Page }) => (
              <Route key={key} path={path} element={<Page />} />
            ))}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
