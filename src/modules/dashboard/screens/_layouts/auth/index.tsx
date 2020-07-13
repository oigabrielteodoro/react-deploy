import React from 'react';

import { Container } from './styles';

const AuthLayout: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AuthLayout;
