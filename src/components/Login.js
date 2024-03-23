import React, { useState } from 'react';
import "../css/Login.css";
import { Link } from 'react-router-dom';

import logopole from '../imgs/logo.png';
import designlogin from '../imgs/Imagetech.jpg'
import cachePassword from '../imgs/cachePassword.png'
import voirPassword from '../imgs/voirPassword.png'


function Login() {
  document.body.style.backgroundColor = "var(--colorYellow)";
  const [passwordIcone, setPasswordIcone] = useState(voirPassword);
  const [passwordType, setPasswordType] = useState("password");
  const changeStatePassword = () => {
    if(passwordIcone===voirPassword){
        setPasswordIcone(cachePassword);
        setPasswordType("text");
    }else{
        setPasswordIcone(voirPassword);
        setPasswordType("password");
    }
  };
  return (
    <div className='principContainer'>
      
      <div className='boxloginPrinci'>
        <div className='boxImgLog'>
          <div className='imagediv'>
            <img src={designlogin} alt='designlogin'className='imagetech'></img>
          </div>
          <div className='boxlogin'>
             <div className='menubox'>
                 <div className='logo-box'>
                   <img src={logopole} alt='logo'className='logo-pole'></img>
                 </div>
               <div className='helpbox'>Aide</div>
            </div>
            <div className='divlogin'>Connexion</div>
            <div className='divpara'>Nous serions ravis de vous accueillir à PoleScience</div>
            <div className="placeLineLogin">
              <div className="lineLogin"></div>
            </div>
            <div className='bxlabel1'>
            <div className='label-1'>Email:</div>
            </div>
            <div className='boxinput1'>
              <input className='input1' type='texte' placeholder='Abcd@gmail.com'/>
            </div>
              <div className='bxlabel2'>
              <div className='label-2'>Mot de passe:</div>
              </div>
            <div className='boxinput2'>
              <div className="input2">
                <input className='inppass' type={passwordType} placeholder='*************' />
                <div className="btnChangeStatePassword">
                  <img src={passwordIcone} className="iconePassword" onClick={changeStatePassword} />
                </div>
              </div>
            </div>
            <div className='boxboton'>
              <button  type='submit'className='boton'>Connexion</button>
            </div>
            <div className='register'>
              <label>Vous avez un compte ?</label>
              <Link to="/registre" className="aregister">Register</Link>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
