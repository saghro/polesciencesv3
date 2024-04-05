import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../imgs/logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="bg-white text-black relative z-10"> 
      <div className="flex items-center font-medium justify-around relative">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between relative">
          <img 
            src={Logo} 
            alt="logo" 
            className={`md:cursor-pointer ${open ? "md:hidden fixed left-0 top-0" : ""}`} 
            style={{ width: '100px', height: 'auto', zIndex: '9999' }} 
          />
          <div 
            className={`text-3xl md:hidden mt-4 ${open ? "fixed right-0 top-0" : ""}`} 
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] relative z-10">
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-black"> 
              Accueil
            </Link>
          </li>
          <NavLinks />
          <Button/>
        </ul>
    
        <ul
          className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block text-black bg-white"> 
              Accueil
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
        {/* End Mobile Navbar */}
      </div>
    </nav>
  );
};

export default Navbar;
