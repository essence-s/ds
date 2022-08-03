import React, { useEffect, useRef, useState } from "react";
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from "assets/logo.svg";
import close from "./files/close.svg";
import menubar from "./files/menubar.svg";
import "./navbar.css";
import { SwitchTheme } from "components/common/switchTheme/SwitchTheme";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ChangesMenu = ({ data }) => {
  let setToggleMenu = data.setToggleMenu;
  let toggleMenu = data.toggleMenu;
  return (
    <div
      className="conCloseMenu"
      onClick={() => {
        setToggleMenu(!toggleMenu);
      }}
    >
      <div className={`closeLine ${toggleMenu ? "cGiroFin" : "cGiroInicio"}`}>
        <img src={close} alt="" />
      </div>
      <div className={toggleMenu ? "cGiroInicio" : "cGiroFin"}>
        <img src={menubar} alt="menubar" />
      </div>
    </div>
  );
};

const Menu = () => (
  <>
    <motion.p variants={item}>
      <a href="#home">Inicio</a>
    </motion.p>
    <motion.p variants={item}>
      <a href="#us">Nosotros</a>
    </motion.p>
    <motion.p variants={item}>
      <a href="#services">Servicios</a>
    </motion.p>
    <motion.p variants={item}>
      <a href="#opinions">Opiniones</a>
    </motion.p>
    <motion.p variants={item}>
      <a href="#faq">FAQ</a>
    </motion.p>
    <motion.p variants={item}>
      <a href="#newsletter">Boletin</a>
    </motion.p>
  </>
);

const Navbar = () => {
  let [toggleMenu, setToggleMenu] = useState(false);

  let contentLinks = useRef();

  useEffect(() => {
    // console.log(nose.current);
    let links = contentLinks.current.querySelectorAll("a");

    let indice = contentLinks.current.querySelector(
      ".navbar__links-container-indice"
    );
    // console.log(indice)
    links.forEach((item, ind) => {
      item.addEventListener("click", () => {
        // console.log(ind);
        indice.style.transform = `translateX(${75 * ind}px)`;
        indice.style.transition = "0.5s 0.4s";
        setTimeout(() => {
          indice.style.transition = "0.5s";
        }, 400);
      });
    });

    let indiClick = true;
    let indiEleme;
    window.addEventListener("scroll", () => {
      let data = ["home", "us", "services", "opinions", "faq", "newsletter"];

      let scrollT = document.documentElement.scrollTop + 200;
      // console.log(benefits.offsetTop)
      data.forEach((r) => {
        let element = document.querySelector(`#${r}`);
        let offsetTopElement = element.offsetTop;
        // console.log(offsetTopElement)

        if (!(offsetTopElement <= scrollT)) return;

        if (!(indiEleme === r)) {
          indiEleme = r;
          indiClick = true;
        }

        if (!indiClick) return;

        links.forEach((item, ind) => {
          if (item.getAttribute("href") === `#${r}`) {
            // console.log(`click ${r}`)
            indice.style.transform = `translateX(${75 * ind}px)`;
            // indice.style.transition='0.5s'
            indiClick = false;
          }
        });
      });
    });
  });

  return (
    <motion.div
      className="navbar"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="navbar__menu">
        <ChangesMenu data={{ setToggleMenu, toggleMenu }}></ChangesMenu>
        <div
          className={`navbar__menu-container ${
            toggleMenu ? "aLeftToRight" : "aRightToLeft"
          }`}
        >
          <ChangesMenu data={{ setToggleMenu, toggleMenu }}></ChangesMenu>
          <div className="navbar__menu-links">
            <Menu />
          </div>
        </div>
      </div>
      <motion.div className="navbar__logo" variants={item}>
        <img src={logo} alt="logos" />
      </motion.div>

      <div className="navbar__links">
        <div className="navbar__links-container" ref={contentLinks}>
          <div className="navbar__links-container-indice">
            <span></span>
          </div>
          <Menu />
        </div>
      </div>

      <motion.div className="navbar_buttonSpecial" variants={item}>
        <SwitchTheme></SwitchTheme>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
