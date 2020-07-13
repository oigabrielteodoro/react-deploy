import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import CreateProject from './sections/CreateProject';
import Presentation from './sections/Presentation';
import Profile from './sections/Profile';
import Projects from './sections/Projects';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main role="main">
        <Container>
          <Presentation />
          <Profile />
          <Projects />
          <CreateProject />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Home;
