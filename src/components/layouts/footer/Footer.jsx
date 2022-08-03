import React from "react";
import "./footer.css";
import separador from './files/separator.svg'
import logowhite from './files/logowhite.svg'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <img className="footer__img" src={logowhite} alt="" />
        <div className="footer__text">
          La Mente es Maravillosa is a property of Grupo MContigo © 2012 – 2020.
          All rights reserved. Los contenidos de esta publicación se redactan
          solo con fines informativos. En ningún momento pueden servir para
          facilitar diagnósticos o sustituir la labor de un profesional. Le
          recomendamos que contacte con su especialista de confianza.
        </div>
      </div>
      <div className="footer__bar"><img src={separador} alt=""/></div>
      <div className="footer__points">
        <div className="footer__point">Política de Cookies</div>
        <div className="footer__point">Política de Privacidad</div>
        <div className="footer__point">Términos y condiciones de uso</div>
        <div className="footer__point">Cláusula Informativa de Consentimiento</div>
      </div>
    </div>
  );
};

export default Footer;

