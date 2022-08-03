import React, { useEffect, useRef } from "react";
import "./header.css";

// import { telegram, github, twitter, facebook } from "assets/iconSR"
import { ContainerMaxWidth, Slider } from "components/common";
import { useSwitchTheme } from "components/common/switchTheme/SwitchTheme";

import { img1, img2, img3, img4, img5 } from "./files";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

let data = {
  width: "100%",
  autoplay: false,
  view: 1,
  transitionDurationMs: 300,
  intervalDurationMs: 3000,
  view3D: false,
  resize: [
    // { size: 900, view: 2 },
    // { size: 600, view: 1 },
  ],
};

const Header = () => {
  
  return (
    <motion.div
      className="header"
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <ContainerMaxWidth className="header__container">
        <Slider data={data}>

          <div className="hero-h">
            <div className="hero-h__img">
              <img src={img1} alt="" />
            </div>

            <div className="hero-h__content">
              <div className="hero-h__title h1-bold-sans">Somos Los Mejores</div>
              <div className="hero-h__info">
                Es el momento , se parte de este movimiento
              </div>
            </div>
          </div>
          
          <div className="hero-h">
            <div className="hero-h__img">
              <img src={img2} alt="" />
            </div>

            <div className="hero-h__content">
              <div className="hero-h__title h1-bold-sans">Somos Los Mejores</div>
              <div className="hero-h__info">
                Es el momento , se parte de este movimiento
              </div>
            </div>
          </div>

          <div className="hero-h">
            <div className="hero-h__img">
              <img src={img3} alt="" />
            </div>

            <div className="hero-h__content">
              <div className="hero-h__title h1-bold-sans">Somos Los Mejores</div>
              <div className="hero-h__info">
                Es el momento , se parte de este movimiento
              </div>
            </div>
          </div>

          <div className="hero-h">
            <div className="hero-h__img">
              <img src={img4} alt="" />
            </div>

            <div className="hero-h__content">
              <div className="hero-h__title h1-bold-sans">Somos Los Mejores</div>
              <div className="hero-h__info">
                Es el momento , se parte de este movimiento
              </div>
            </div>
          </div>

          <div className="hero-h">
            <div className="hero-h__img">
              <img src={img5} alt="" />
            </div>

            <div className="hero-h__content">
              <div className="hero-h__title h1-bold-sans">Somos Los Mejores</div>
              <div className="hero-h__info">
                Es el momento , se parte de este movimiento
              </div>
            </div>
          </div>


        </Slider>
      </ContainerMaxWidth>
    </motion.div>
  );
};

export default Header;
