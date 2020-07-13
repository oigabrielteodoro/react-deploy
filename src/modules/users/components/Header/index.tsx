import React from 'react';
import { Link } from 'react-scroll';

import { Container, Navigation, NavigationItem } from './styles';

import logo from '../../../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Gabriel" />

      <Navigation>
        <NavigationItem>
          <Link to="profile" spy smooth duration={1000}>
            Sobre mim
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="projects" spy smooth duration={1000}>
            Projetos
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="createProject" spy smooth duration={1000}>
            Iniciar um novo projeto
          </Link>
        </NavigationItem>
      </Navigation>
    </Container>
  );
};

export default Header;
