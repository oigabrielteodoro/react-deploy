import React from 'react';

import footerBackground from '../../../../assets/footer-background.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={footerBackground} alt="Footer Background" />

      <span>
        <a href="https://instagram.com/oigabrielteodoro">Gabriel Teodoro</a> ©
        Todos os direitos reservados.
      </span>
    </Container>
  );
};

export default Footer;
