import React, { useEffect, useState } from "react";
import "./modalCookies.css";
import cookies from "./files/cookies.png";

const ModalCookies = () => {
  let [viewCookies, setViewCookies] = useState(false);

  const inCookies = () => {
    setTimeout(() => {
      try {
        let dataViewCookies = JSON.parse(
          localStorage.getItem("viewCookies")
        ).cookies;
        setViewCookies(dataViewCookies);
      } catch {
        setViewCookies(true);
      }
    }, 3000);
  };

  const onOkCookies = () => {
    setViewCookies(false);
    localStorage.setItem("viewCookies", JSON.stringify({ cookies: false }));
  };

  useEffect(() => {
    inCookies();
  }, []);

  if (!viewCookies) return;

  return (
    <div className="modal-cookies">
      <div className="modal-cookies__content">
        <div className="modal-cookies__info">
          <img className="modal-cookies__img" src={cookies} alt="img-cookies" />
          <div className="modal-cookies__title">Cookies!</div>
          <p>Usamos cookies para hacer su experiencia mejor</p>
        </div>
        <div className="modal-cookies__options">
          <div className="modal-cookies__option">Privacy Politc</div>
          <div className="modal-cookies__option" onClick={onOkCookies}>
            OK
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCookies;
