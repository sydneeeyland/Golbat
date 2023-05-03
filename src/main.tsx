import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { ThemeProvider } from '@mui/material';

import store from './Redux/store';

import App from './App';

import AppErrorFallBack from './Middleware/AppErrorFallBack';

import theme from './Assets/Styles/Theme';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <ErrorBoundary FallbackComponent={AppErrorFallBack}>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </ThemeProvider>
);
