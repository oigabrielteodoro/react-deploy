import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default AppProvider;
