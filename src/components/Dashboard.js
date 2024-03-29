import React, { useEffect, useState } from 'react';
import '../css/Dashboard.css';
import logo from '../imgs/logo.png';
import Accueil from '../imgs/accueil.png';
import Utilisateur from '../imgs/utilisateur.png';
import Commandee from '../imgs/commande.png';
import Reclamation from '../imgs/reclamation.png';
import Parametre from '../imgs/parametres.png';
import New_order from '../imgs/nouvelle commandes.png';
import Logout from '../imgs/se-deconnecter.png';
import Programmeur from '../imgs/programmeur.png';
import Notification from '../imgs/notification.png';

import { Routes, Route, Link } from 'react-router-dom';
import User from './dashboard/Utilisateur';
import Commande from './dashboard/Commande';
import { useLocation } from 'react-router-dom/dist';

function Dashboard() {
  const [pathSelectionne, setPathSelectionne] = useState("/dashboard/user");
  const location = useLocation();
  let locationStr = location.pathname;

  useEffect(() => {
    setPathSelectionne(locationStr);
    if (locationStr === '/dashboard') setPathSelectionne('/dashboard/user');
  }, [locationStr]);

  return (
    <div className="container">
        <div className="dashboard-container">


          
          <div className='dashboard_0383'>
            <div className='logo'>
              <img src={logo} alt='Logo' />
            </div>

            <div className="placeLineDashboard">
              <div className="lineDashboard"></div>
            </div>
            <nav>
              <div className="nav_8763 nav_0" >
                <img src={Accueil} alt='acc' />
                <span>Accueil</span>
              </div>
              <Link to="/dashboard/users" className={pathSelectionne === '/dashboard/users' ? "nav_8763 nav_0 nav_click" : "nav_8763 nav_0"} >
                <img src={Utilisateur} alt='uti' />
                <span>Utilisateurs</span>
              </Link>
              <Link to='/dashboard/orders' className={pathSelectionne === '/dashboard/orders' ? "nav_8763 nav_0 nav_click" : "nav_8763 nav_0"}>
                <img src={Commandee} alt='Comm' />
                <span>Commandes</span>
              </Link>
              <div className="nav_8763 nav_0">
                <img src={Reclamation} alt='rec' />
                <span>Réclamation</span>
              </div>
              <div className="nav_8763 nav_0">
                <img src={Parametre} alt='para' />
                <span>Paramètres</span>
              </div>
              <div className="nav_8763 nav_0" >
                <img src={New_order} alt='new_commande' />
                <span>Nouvelle commande</span>
              </div>
            </nav>

            <div className="btn_dash">
              <button className='btn_dec'>
                <img src={Logout} alt='out' />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>

          <div className='dashboard_content_0783'>
            <div className="admin">
            <div className='admimg'>
              <img src={Programmeur} alt='prog' className='img_1'></img>
              </div>

              <div className='paraAdm'>
                <div className='nomadm'>Joe shmoe</div>
                <div className='adm'>admin</div>
              </div>
              <div className='divbell'>
              <img src={Notification} alt='notif' className='img_2'></img>
             </div>
            </div>
            <div className="dashboard_pages">
              <Routes>
                <Route index />
                <Route path="users" element={<User />} />
                <Route path="orders" element={<Commande />} />
              </Routes>
            </div>
          </div>

        </div>
      </div>
  );
};

export default Dashboard;