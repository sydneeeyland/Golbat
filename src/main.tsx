// Package
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

// Components
import { ThemeProvider } from '@mui/material';

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
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary FallbackComponent={AppErrorFallBack}>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);
