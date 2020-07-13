import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { Container, UseProfile } from './styles';

import profileImg from '../../../../../../assets/images/profile.png';
import profileBackgroundImg from '../../../../../../assets/profile-background.svg';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src={profileBackgroundImg} alt="Profile Background" />

      <UseProfile>
        <img src={profileImg} alt="Gabriel Teodoro" />

        <div>
          <a href="https://github.com/oigabrielteodoro">
            <FiGithub size={25} color="#f4ede8" />
          </a>
          <a href="https://linkedin.com/in/oigabrielteodoro">
            <FiLinkedin size={25} color="#f4ede8" />
          </a>
        </div>
      </UseProfile>

      <UseProfile>
        <h1>sobre.mim</h1>

        <p>
          Há muito tempo atrás, um simples menino chamado{' '}
          <a href="https://instagram.com/oigabrielteodoro">Gabriel Teodoro</a>
          , aos seus 13 anos de idade aprendia a desenvolver seus primeiros
          sistemas, desde então esse simples menino cresceu apaixonado por
          programação.
          <br />
          <br />
          Hoje esse menino chamado Gabriel cresceu e virou desenvolvedor web e
          mobile, apaixonado por React, React Native, Node.js e todo o
          ecosistema por volta de todas essas tecnologias.
          <br />
          <br />
          Esse jovem hoje em dia busca evoluir ainda mais em sua área, em busca
          de novas oportunidades para continuar progredindo como desenvolvedor.
        </p>
      </UseProfile>
    </Container>
  );
};

export default Profile;
