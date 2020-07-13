import React, { useState, useCallback } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';

import {
  Container,
  Navigation,
  NavigationToggleButton,
  NavigationItem,
} from './styles';

import logo from '../../../../assets/logo.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <Container>
      <img src={logo} alt="Gabriel" />

      <Navigation>
        <NavigationToggleButton isOpen={isOpen} onClick={handleToggleOpen}>
          <FiMenu size={30} color="#7051dc" />

          <ul>
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
          </ul>
        </NavigationToggleButton>
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
