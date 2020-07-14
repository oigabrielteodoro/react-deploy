import React from 'react';
import { Element, Link } from 'react-scroll';
import { FiHelpCircle } from 'react-icons/fi';

import highBackgroundImg from '../../../../../../assets/high-background.svg';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <Container>
      <Element name="presentation">
        <h1>As melhores tecnologias para as melhores idéias.</h1>
        <p>
          Aplicações fullstack para web e mobile desde o layout até o código.
        </p>
        <div>
          <Link to="createProject" spy smooth duration={1000}>
            Iniciar um projeto
          </Link>

          <Link to="profile" spy smooth duration={1000}>
            <FiHelpCircle size={25} color="#f4ede8" />
          </Link>
        </div>
      </Element>

      <img src={highBackgroundImg} alt="High Background" />
    </Container>
  );
};

export default Presentation;
