import React from "react";
import "./home.css";

import {
  Header,
  Services,
  Us,
  Opinions,
  NewsLetter,
  FAQ,
} from "./partsHome/index";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <Us></Us>
      <Services></Services>

      <Opinions></Opinions>
      <FAQ></FAQ>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
