import React from "react";
import "./us.css";
import { ContainerMaxWidth } from "components/common";
import trabajo from "./files/trabajo.svg";

const Us = () => {
  return (
    <div id="us" className="us">
      <ContainerMaxWidth className="us__container">
        <div className="us__content">
          <div className="us__info">
            <div className="us__title h1-bold-sans">Nosotros</div>
            <div className="us__subtitle h6-bold-sans">
              1. Asignarles tareas sencillas
            </div>
            <p>
              La primera idea o estrategia para ayudar a los niños a ser
              responsables es asignarles tareas sencillas. Para que la situación
              sea más fácil, puede ser conveniente que un adulto también las
              haga. Por ejemplo, ayudar a lavar los platos o hacer la colada con
              alguno de los progenitores es una buena manera de empezar. Será el
              primer paso para que adquieran autonomía: ser sus modelos. Pueden
              recoger los platos mientras uno de los progenitores los empieza a
              lavar.
            </p>
          </div>
          <img className="us__img" src={trabajo} alt="" />
        </div>
      </ContainerMaxWidth>
    </div>
  );
};

export default Us;
