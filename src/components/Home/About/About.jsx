import React from "react";
import "./About.css";
import "../../../../src/css/library.css"
import Nous from '../../../imgs/nous1.jpeg'
const About = () => {
  return (
    <div className="about-us">
      <div className="about-content">
        <div className="about-image">
          <img src={Nous} alt="" />
        </div>
        <div className="about-text">
        <h2>Nous</h2>
          <p>
            Nous sommes une entreprise axée sur l'avancement du monde numérique
            et le développement de solutions logicielles. En parallèle, nous
            avons une branche éducative dédiée à accompagner les étudiants dans
            l'exploration du domaine de la numérisation et des sciences.
          </p>
          <p>Polescience Copyright 2024</p>
        </div>
        <div className="about-team">
        </div>
      </div>
    </div>
  );
};

export default About;
