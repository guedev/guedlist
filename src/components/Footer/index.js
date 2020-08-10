import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo}  alt="Guedlist logo" />
      </a>
      <p>
        Desenvolvido durante a Imersão React da Alura.
        
      </p>
    </FooterBase>
  );
}

export default Footer;
