import React from 'react';
import { Link } from 'react-router-dom';
import "../css/home.css"
import Navbar from './Home/navbar/Navbar';
import Hero from './Home/Hero/Hero';
import About from './Home/About/About';
import Services from './Home/Services/Services';
import image1 from "../imgs/image2.png";
import image2 from "../imgs/image.png";
import image3 from "../imgs/image3.png";

function Home() {
    const slides = [
        {
            image: image1,
            text: `Awaken to a World of Digital Solutions: 
            Embrace Artificial Intelligence for Effortless
            Problem-Solving!
            `,
            buttonText: "Découvrir",
        },
        {
            image: image2,
    
            text: `Awaken to a World of Digital Solutions: 
            Embrace Artificial Intelligence for Effortless
            Problem-Solving!
            `,
            buttonText: "Découvrir",
        },
        {
            image: image3,
      
            text: `Awaken to a World of Digital Solutions: 
            Embrace Artificial Intelligence for Effortless
            Problem-Solving!
            `,
            buttonText: "Découvrir",
        },
    ];
      
    return (
        <div className="pagehome">
            <Navbar/>
            <Link to="/Navbar" />
            <Hero slides={slides} />    
            <Link to="Hero"/>
            <div className="divider"></div>
            <About/>
            <Link to="About"/>
            <div className="divider"></div>
            <Services/>
        </div>
    );
}

export default Home;
