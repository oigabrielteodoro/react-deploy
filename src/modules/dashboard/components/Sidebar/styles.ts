import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Switch from 'react-switch';

export const Container = styled.aside`
  position: fixed;

  max-width: 100px;
  width: 100%;
  background: ${({ theme }) => theme.colors.backgroundSecundary};

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 50px 0;

  img {
    width: 50px;
    height: 50px;
  }
`;

export const Navigation = styled.nav``;

export const NavigationItem = styled.li`
  cursor: pointer;
  transition: all 0.2s;

  & + li {
    margin-top: 40px;
  }

  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }
`;

export const NavigationItemLink = styled(NavLink).attrs({
  activeStyle: {
    color: '#7051dc',
  },
})`
  color: #a8a8b3;
`;

export const ThemeSwitch = styled(Switch)``;
