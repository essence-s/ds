import { ContainerMaxWidth, Slider } from "components/common";
import React from "react";
import "./opinions.css";
import comilla from "./files/comilla.svg";

const Opinions = () => {
  let data = {
    width: "100%",
    autoplay: false,
    view: 3,
    transitionDurationMs: 300,
    intervalDurationMs: 3000,
    view3D: false,
    resize: [
      { size: 900, view: 2 },
      { size: 600, view: 1 },
    ],
  };

  return (
    <div id="opinions" className="opinions">
      <ContainerMaxWidth className="opinions__container">
        <div className="opinions__title h1-bold-sans">Testimonios</div>

        <div className="opinions__content">
          <Slider data={data}>
            {[
              "~ Maria Montessori ~",
              "~ Maria Montessori ~",
              "~ Maria Montessori ~",
              "~ Maria Montessori ~",
              "~ Maria Montessori ~",
            ].map((r, i) => {
              return (
                <div key={i} className="opinions__card">
                  <div className="opinions__img">
                    <img src={comilla} alt="" />
                  </div>
                  <div className="opinions__text">
                    Me gustaría agradecer al sitio, me ayudó de una manera
                    inimaginable, el psicólogo fue sumamente servicial ,me
                    siento mejor conmigo mismo.
                  </div>
                  <div className="opinions__name">{r}</div>
                </div>
              );
            })}
          </Slider>
        </div>
      </ContainerMaxWidth>
    </div>
  );
};

export default Opinions;
