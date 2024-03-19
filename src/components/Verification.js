import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../css/Verification.css";
import verification from '../imgs/Verification.webp';
import logo from '../imgs/logo.png';

function Verification() {
    document.body.style.backgroundColor = "var(--colorYellow)";
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);
    
    useEffect(() => {
      inputRefs.current[0].focus();
    }, []);
  
    const handleChange = (index, value) => {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      console.log(newVerificationCode)
      if (value === '' && index > 0) {
        inputRefs.current[index - 1].focus();
      }
  
      if (value !== '' && index < verificationCode.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    };

    return (
        <div className="verificationPage">
            <div className="placeImage">
                <img src={verification} className="img" alt="Verification" />
            </div>
            <div className="formPlace">
                <div className="topDiv">
                    <img src={logo} alt="logo" className='logo'/>
                </div>
                <div className="secondDiv"> 
                    <div className='title1'>Vérification Email</div>
                    
                    <div className='title2'>Assurez-vous d'ecrire le code envoyé</div>
                   <div className='lign'>
                   <div className="line1"></div>
                   </div>
                </div>
                <div className="inpsDiv">
                    <div className="placeinp">
                       {verificationCode.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    size="1"
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    id={`digit${index + 1}`} 
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    className='inputs'
                                />
                            ))}
                    </div>
                </div>
            <div className="place-button">
                <button className="button" >Envoyer</button>
            </div>
          <div className='login-place'>
          <div className="placeGoLoginCenter">Vous avez déjà un compte ? <span><Link to="/login" className="loginLink">log in</Link></span></div>
          </div>
            </div>
        </div>
    );
}

export default Verification;
