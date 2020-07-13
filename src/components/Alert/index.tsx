import React from 'react';

import { Container } from './styles';

interface IAlertProps {
  type: 'error' | 'success' | 'info';
  isVisible: boolean;
}

const Alert: React.FC<IAlertProps> = ({ children, type, isVisible }) => {
  return (
    <Container isVisible={isVisible} type={type}>
      {children}
    </Container>
  );
};

export default Alert;
