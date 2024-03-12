import React from 'react';
import "../css/Login.css";
import logopole from '../imgs/Polesciencelogo.png';
import designlogin from '../imgs/Imagetech.png'


function Login() {
  return (
    <>
    <div className='principContainer'>
      <div className='menubox'>
        <div className='logobox'>
          <img src={logopole} alt='logo'className='logopole'></img>
        </div>
        
          <div className='helpbox'>Help</div>
        
      </div>
      <div className='boxloginPrinci'>
        <div className='boxImgLog'>
          <div className='imagediv'>
            <img src={designlogin} alt='designlogin'className='imagetech'></img>
          </div>
          <div className='boxlogin'>
            <div className='divlogin'>Login</div>
            <div className='divpara'>We would be delighted to welcome you to PoleScience</div>
           <div className='bxlabel1'>
           <div className='label-1'>Email / Téléphone:</div>
           </div>
            <div className='boxinput1'>
              <input className='input1' type='texte' placeholder='  Abcd@gmail.com'/>
            </div>
              <div className='bxlabel2'>
              <div className='label-2'>Password:</div>
              </div>
            <div className='boxinput2'>
              <input className='input2' type='texte' placeholder='  *************'/>
            </div>
            <div className='boxboton'>
            <button  type='submit'className='boton'>Login</button>
            </div>
            <div className='register'>
              <labe>Do you have account ?</labe>
              <a href='' className='aregister'>Register</a>
            </div>


          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Login;
