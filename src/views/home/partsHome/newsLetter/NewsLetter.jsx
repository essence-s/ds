import { ContainerMaxWidth } from "components/common";
import React, { useRef } from "react";
import "./newsletter.css";
import { telegram, github, twitter, facebook } from "assets/iconSR";
import illust from "./files/Ilustra1.svg";
import { motion, Variants } from "framer-motion";

const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    // rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 0.4,
    },
  },
};

const NewsLetter = () => {
  let refInputP = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(refInputP.current.value);
    alert("Datos Enviados")
  };
  return (
      <div id="newsletter" className="newsletter">
        <ContainerMaxWidth className="newsletter__container">
          <div className="newsletter__title h1-bold-sans">
            Boletin Informativo
          </div>
          <div className="newsletter__content">
            <div className="newsletter__illus">
              <img src={illust} alt="" />
            </div>
            <div className="newsletter__info">
              <div className="newsletter__info-title h6-bold-sans">
                Recibe Informacion
              </div>
              <p>Envienos su Correo para recibir mas información </p>
              <form className="newsletter__form" onSubmit={(e)=>onFormSubmit(e)}>
                <input ref={refInputP} type="email" placeholder="Inserte tu correo" />
                <button>Suscribirse</button>
              </form>
            </div>
          </div>
          {/* <div className="contact-redes"> */}
          {/*   <div className="contact-redesContent"> */}
          {/*     <img src={telegram} alt=""/> */}
          {/*   </div> */}
          {/*   <div className="contact-redesContent"> */}
          {/*     <img src={github} alt=""/> */}
          {/*   </div> */}
          {/*   <div className="contact-redesContent"> */}
          {/*     <img src={twitter} alt=""/> */}
          {/*   </div> */}
          {/*   <div className="contact-redesContent"> */}
          {/*     <img src={facebook} alt=""/> */}
          {/*   </div> */}
          {/* </div> */}
        </ContainerMaxWidth>
      </div>
  );
};

export default NewsLetter;
