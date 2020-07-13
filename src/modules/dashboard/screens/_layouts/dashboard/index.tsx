import React from 'react';

import Sidebar from '../../../components/Sidebar';

import { Wrapper, Container } from './styles';

import dashboardBackground from '../../../../../assets/dashboard-background.svg';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <img src={dashboardBackground} alt="Dashboard Background" />

      <Sidebar />

      <Container>{children}</Container>
    </Wrapper>
  );
};

export default DashboardLayout;
