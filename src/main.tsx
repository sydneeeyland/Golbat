// Package
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

// Components
import { ThemeProvider } from '@mui/material';

// Store
import store from './Redux/store';

// Application
import App from './App';

// Middleware
import AppErrorFallBack from './Middleware/AppErrorFallBack';

// Styles
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
