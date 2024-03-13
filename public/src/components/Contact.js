import React, { useState } from "react";
import '../css/Contact.css'
import contactUs from '../imgs/ContactUs.jpg';
import retour from '../imgs/retour.png';

export default function Contact() {
  document.body.style.backgroundColor = "var(--colorYellow)";
  const [fullName, setFullName] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  const Envoyer = (event) => {
    event.preventDefault();
    if(fullName=="" || object==""  || message=="" ){
      console.log("non valide")
    }else{
      console.log(fullName);
      console.log(object);
      console.log(message);
    }
  };

  return (
    <div className="page-contact">
        <div className="page-contact-image-place">
          <img src={contactUs} className="page-contact-image" />
        </div>
        <div className="page-contact-Form">
          <div className="return-help">
            <div className="return-place">
                <div className="return">
                  <img src={retour} className="return-img" />
                </div>
            </div>
            <div className="help">Aide</div>
          </div>
          <div className="title1">Contactez-Nous</div>
          <div className="title2">Nous sommes fiers de recevoir vos messages</div>
          <div className="line-place">
            <div className="line-contact"></div>
          </div>
          <div className="group-form">
            <div className="group-form-center">
              <div className="bloc-inp">
                <div className="titre-input">Nom et prénom:</div>
                <div className="place-input">
                    <input type="text" className="inp" placeholder="Joe Shmoe" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
              </div>
              <div className="bloc-inp">
                <div className="titre-input">Objet:</div>
                <div className="place-input">
                    <input type="text" className="inp" placeholder="Objet..." value={object} onChange={(e) => setObject(e.target.value)}/>
                </div>
              </div>
              <div className="bloc-inp">
                <div className="titre-input">Message:</div>
                <div className="place-input-message">
                    <textarea className="inp" cols="30" rows="10" placeholder="Bonjour..." onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
              </div>
              <div className="place-button-contact">
                <button className="button-contact" onClick={Envoyer}>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
