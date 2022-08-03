import React from "react";
import "./services.css";
import { ContainerMaxWidth } from "components/common";

const Services = () => {
  return (
    <div id="services" className="services">
      <ContainerMaxWidth className="services__container">
        <div className="services__title h1-bold-sans">Servicios</div>

        <div className="services__content">
          <div className="services__info">
            <div className="services__bar"></div>
            <div className="services__text">
              ¿Cómo podemos diseñar una educación que tenga como resultado niños
              más responsables? En este artículo compartimos algunas estrategias
              que aumentan la probabilidad de éxito para este objetivo.
            </div>
          </div>
          <div className="services__info">
            <div className="services__bar"></div>
            <div className="services__text">
              ¿Cómo podemos diseñar una educación que tenga como resultado niños
              más responsables? En este artículo compartimos algunas estrategias
              que aumentan la probabilidad de éxito para este objetivo.
            </div>
          </div>
          <div className="services__info">
            <div className="services__bar"></div>
            <div className="services__text">
              ¿Cómo podemos diseñar una educación que tenga como resultado niños
              más responsables? En este artículo compartimos algunas estrategias
              que aumentan la probabilidad de éxito para este objetivo.
            </div>
          </div>
        </div>
      </ContainerMaxWidth>
    </div>
  );
};

export default Services;
