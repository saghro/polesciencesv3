import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import "../css/Registre.css";
import logo from '../imgs/logo.png'
import quotes from '../imgs/quotes.png'
import cachePassword from '../imgs/cachePassword.png'
import voirPassword from '../imgs/voirPassword.png'
import chargement from '../imgs/chargement.png'

function Registre() {
    document.body.style.backgroundColor = "var(--colorYellow)";
    const [passwordIcone1, setPasswordIcone1] = useState(voirPassword);
    const [passwordIcone2, setPasswordIcone2] = useState(voirPassword);
    const [passwordType1, setPasswordType1] = useState("password");
    const [passwordType2, setPasswordType2] = useState("password");

    const [message, setMessage] = useState("");
    const [displayMessage, setDisplayMessage] = useState("none");
    const [colorMessage, setColorMessage] = useState("var(--colorCorrect)");

    const [displayReload,setDisplayReload] = useState("none");
    const [displayRegistre,setDisplayRegistre] = useState("flex");

    const [nameVal, setNameVal] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [phoneVal, setPhoneVal] = useState('');
    const [password1Val, setPassword1Val] = useState('');
    const [password2Val, setPassword2Val] = useState('');


    const changeStatePassword1 = () => {
        if(passwordIcone1===voirPassword){
            setPasswordIcone1(cachePassword);
            setPasswordType1("text");
        }else{
            setPasswordIcone1(voirPassword);
            setPasswordType1("password");
        }
    };
    const changeStatePassword2 = () => {
        if(passwordIcone2===voirPassword){
            setPasswordIcone2(cachePassword);
            setPasswordType2("text");
        }else{
            setPasswordIcone2(voirPassword);
            setPasswordType2("password");
        }
    };
    const phoneValChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setPhoneVal(value.slice(0, 10));
    }
    const emailValChange = (e) => {
        setEmailVal(e.target.value);
    }
    const nameValChange = (e) => {
        setNameVal(e.target.value);
    }
    const password1ValChange = (e) => {
        setPassword1Val(e.target.value);
    }
    const password2ValChange = (e) => {
        setPassword2Val(e.target.value);
    }
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isPhoneValid = (str) => {
        return str.length === 10;
    };
    const isPasswordValid = (str) => {
        return str.length >= 10;
    };
    const Registre = () => {
        if(nameVal==="" || emailVal===""|| phoneVal===""|| password1Val===""|| password2Val===""){
            setMessage("Remplissez tous les champs")
            setDisplayMessage("flex");
            setColorMessage("var(--colorIncorrect)");
        }else{
            if(!isEmailValid(emailVal)){
                setMessage("L'email n'est pas validé")
                setDisplayMessage("flex");
                setColorMessage("var(--colorIncorrect)");
            }else{
                if(!isPhoneValid(phoneVal)){
                    setMessage("Le Téléphone n'est pas validé")
                    setDisplayMessage("flex");
                    setColorMessage("var(--colorIncorrect)");
                }else{
                    if(!isPasswordValid(password1Val) || !isPasswordValid(password2Val)){
                        setMessage("Le mot de passe n'est pas fort")
                        setDisplayMessage("flex");
                        setColorMessage("var(--colorIncorrect)");
                    }else{
                        if(password1Val!=password2Val){
                            setMessage("Le mot de passe est incorrect")
                            setDisplayMessage("flex");
                            setColorMessage("var(--colorIncorrect)");
                        }else{
                            const currentDate = new Date();
                            const formattedDate = currentDate.toISOString().split('T')[0];
                            let hashPassword =CryptoJS.SHA256(password1Val).toString();
                            AddUser(nameVal,emailVal,phoneVal,hashPassword,formattedDate);
                        }
                    }
                }
            }
        }
        
    }
    
    const AddUser = async (name,email,phone,password,dateCreation) =>{
        setDisplayReload("flex");
        setDisplayRegistre("none");
        try{
            const response = await fetch('http://89.116.111.198:3000/api/user/Registre', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name,email,phone,password,dateCreation }),
            });

            if (response.ok) {
                setDisplayReload("none");
                setDisplayRegistre("flex");
                const responseData = await response.json();
                if(responseData.state){
                    setMessage("Utilisateur ajouté avec succès")
                    setDisplayMessage("flex");
                    setColorMessage("var(--colorCorrect)");
                }else{
                    setMessage("L'utilisateur existe déjà")
                    setDisplayMessage("flex");
                    setColorMessage("var(--colorIncorrect)");
                }
            } else {
                setDisplayReload("none");
                setDisplayRegistre("flex");

                setMessage("Problème de connexion avec le serveur")
                setDisplayMessage("flex");
                setColorMessage("var(--colorIncorrect)");
            }
        }catch(error){
            setDisplayReload("none");
            setDisplayRegistre("flex");

            setMessage("Problème de connexion avec le serveur")
            setDisplayMessage("flex");
            setColorMessage("var(--colorIncorrect)");
        }
    }


  return (
    <div className="registerPage">
        <div className="designText">
            <div className="designTextCenter">
                <img src={quotes} className="imgQuotesTop" />
                <div className="designTextCenter2">La meilleure plateforme pour apprendre et créer votre projet de zéro avec un bon support pour atteindre vos objectifs</div>
                <img src={quotes} className="imgQuotesBottom" />
            </div>
        </div>
        <div className="formRegistre">
            <div className="placeLogo">
                <div className="logoBloc">
                    <img src={logo} className='logo' />
                </div>
            </div>
            <div className="titlePlace">
                <div className="titlePlaceCenter">
                    <span className='wordColorYellow'>Register</span> pour une tournée
                </div>
            </div>
            <div className="titlePlace smolltitle">
                <div className="smolltitleCenter titlePlaceCenter">
                    Nous serions ravis de vous accueillir à PoleScience
                </div>
            </div>
            <div className="titlePlace smolltitle lineStyle">
                <div className="line"></div>
            </div>
            <div className="formInputsPlace">
                <div className="formInputs">
                    <div className="Message" style={{ display: displayMessage, backgroundColor: colorMessage }}>{message}</div>
                    <div className="titleInp">Nom et prénom:</div>
                    <div className="placeInp">
                        <input type="text" className="inp" placeholder="Joe Shmoe" value={nameVal} onChange={nameValChange} />
                    </div>
                    <div className="titleInp">Email:</div>
                    <div className="placeInp">
                        <input type="text" className="inp" placeholder="Joe Shmoe@gmail.com" value={emailVal} onChange={emailValChange} />
                    </div>
                    <div className="titleInp">Téléphone:</div>
                    <div className="placeInp">
                        <input type="text" className="inp" placeholder="06 11223344" value={phoneVal} onChange={phoneValChange}/>
                    </div>
                    <div className="titleInp">Mot de passe:</div>
                    <div className="placeInp placeInpPassword">
                        <button id="BtnPass1"><img src={passwordIcone1} id="iconePassword1" onClick={changeStatePassword1} /></button>
                        <input type={passwordType1} className="inp" placeholder="********" value={password1Val} onChange={password1ValChange} />
                    </div>
                    <div className="titleInp">Mot de passe:</div>
                    <div className="placeInp placeInpPassword">
                        <button id="BtnPass2"><img src={passwordIcone2} id="iconePassword2" onClick={changeStatePassword2}/></button>
                        <input type={passwordType2} className="inp" placeholder="********" value={password2Val} onChange={password2ValChange} />
                    </div>
                    <div className="placeBtn">
                       <button className="btnRegistre" onClick={Registre}>
                           <span style={{ display: displayRegistre}}>Register</span>
                            <div className="chargement-icone-place" style={{ display: displayReload}}>
                                <img src={chargement} className="chargement-icone" />
                            </div>
                        </button>
                    </div>
                    <div className="placeGoLogin">
                        <div className="placeGoLoginCenter">Vous avez déjà un compte ? <span><Link to="/login" className="loginLink">log in</Link></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Registre;
