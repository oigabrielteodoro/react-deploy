import React from 'react';
import {
  FiHome,
  FiMoon,
  FiMail,
  FiSettings,
  FiClipboard,
  FiLayers,
  FiSun,
} from 'react-icons/fi';
import { shade } from 'polished';

import { useTheme } from '../../../../hooks/theme';

import {
  Container,
  Navigation,
  NavigationItem,
  NavigationItemLink,
  ThemeSwitch,
} from './styles';

import favicon from '../../../../assets/favicon.svg';

const Sidebar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <img src={favicon} alt="Favicon" />

      <Navigation>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/statistics">
            <FiHome size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/projects">
            <FiLayers size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/mails">
            <FiMail size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/tenders">
            <FiClipboard size={25} />
          </NavigationItemLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationItemLink to="/dashboard/settings">
            <FiSettings size={25} />
          </NavigationItemLink>
        </NavigationItem>
      </Navigation>
      <div>
        <ThemeSwitch
          onChange={toggleTheme}
          checked={theme.title === 'light'}
          checkedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              <FiMoon size={20} color="#7159c1" />
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 15,
                paddingRight: 2,
              }}
            >
              <FiSun size={20} color="#f4ede8" />
            </div>
          }
          height={30}
          width={60}
          handleDiameter={20}
          offColor={shade(0.15, theme.colors.primary)}
          onColor="#f4ede8"
        />
      </div>
    </Container>
  );
};

export default Sidebar;
