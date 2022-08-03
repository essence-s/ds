import React from "react";
import "./faq.css";
import {
  DropDown,
  DropDownList,
  DropDownView,
} from "components/common/dropDown/DropDown";

const FAQ = () => {
  const data = [
    {
      name: "¿Cuáles son los pasos para tomar una decisión?",
      info: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
    {
      name: "¿Cuáles son los pasos para tomar una decisión?",
      info: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
    {
      name: "¿Cuáles son los pasos para tomar una decisión?",
      info: [
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      ],
    },
  ];

  return (
    <div id="faq" className="faq">
      <div className="faq__title h1-bold-sans">FAQ</div>

      {data.map((r, i) => {
        return (
          <DropDown key={i} className="faq__dropdow">
            <DropDownView className="faq__dropdowview">
              <span className="faq__dropdowview-title h6-bold-sans">
                ¿Cuáles son los pasos para tomar una decisión?
              </span>
              <span>^</span>
            </DropDownView>
            <DropDownList data={r.info}></DropDownList>
          </DropDown>
        );
      })}
    </div>
  );
};

export default FAQ;
