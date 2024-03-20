import React, { useState, useEffect } from 'react';
import './Utilisateur.css';
import Pagination from '@mui/material/Pagination';
import loupe from '../../imgs/loupe.png';
import supprimer_w from '../../imgs/supprimer_w.png';
import bloquer_w from '../../imgs/bloquer_w.png';

function Utilisateur() {
  const initialUtilisateur = [
    { id: 1, nom: 'Joe Shmoe1', date: '05/03/2024', telephone: '(222) 444-00022', email: 'joe@gmail.com', type: 'client' },
    { id: 2, nom: 'Amal Bennani2', date: '06/03/2024', telephone: '(212) 736-54263', email: 'amal@gmail.com', type: 'etudiante' },
    { id: 3, nom: 'Salim Beniss3', date: '07/03/2024', telephone: '(212) 656-54263', email: 'salim@gmail.com', type: 'etudiante' },
    { id: 4, nom: 'Aya Essou4', date: '08/03/2024', telephone: '(212) 744-00082', email: 'aya@gmail.com', type: 'client' },
    { id: 1, nom: 'Joe Shmoe5', date: '05/03/2024', telephone: '(222) 444-00022', email: 'joe@gmail.com', type: 'client' },
    { id: 2, nom: 'Amal Bennani6', date: '06/03/2024', telephone: '(212) 736-54263', email: 'amal@gmail.com', type: 'etudiante' },
    { id: 3, nom: 'Salim Beniss7', date: '07/03/2024', telephone: '(212) 656-54263', email: 'salim@gmail.com', type: 'etudiante' },
    { id: 4, nom: 'Aya Essou8', date: '08/03/2024', telephone: '(212) 744-00082', email: 'aya@gmail.com', type: 'client' },
    { id: 1, nom: 'Joe Shmoe9', date: '05/03/2024', telephone: '(222) 444-00022', email: 'joe@gmail.com', type: 'client' },
    { id: 2, nom: 'Amal Bennani0', date: '06/03/2024', telephone: '(212) 736-54263', email: 'amal@gmail.com', type: 'etudiante' },
    { id: 3, nom: 'Salim Beniss0', date: '07/03/2024', telephone: '(212) 656-54263', email: 'salim@gmail.com', type: 'etudiante' },
    { id: 4, nom: 'Aya Essou86', date: '08/03/2024', telephone: '(212) 744-00082', email: 'aya@gmail.com', type: 'client' },
    { id: 1, nom: 'Joe Shmoe66', date: '05/03/2024', telephone: '(222) 444-00022', email: 'joe@gmail.com', type: 'client' },
    { id: 2, nom: 'Amal Bennani66', date: '06/03/2024', telephone: '(212) 736-54263', email: 'amal@gmail.com', type: 'etudiante' },
    { id: 3, nom: 'Salim Beniss66', date: '07/03/2024', telephone: '(212) 656-54263', email: 'salim@gmail.com', type: 'etudiante' },
    { id: 4, nom: 'Aya Essou44', date: '08/03/2024', telephone: '(212) 744-00082', email: 'aya@gmail.com', type: 'client' },
    { id: 1, nom: 'Joe Shmoe44', date: '05/03/2024', telephone: '(222) 444-00022', email: 'joe@gmail.com', type: 'client' },
    { id: 2, nom: 'Amal Bennani5', date: '06/03/2024', telephone: '(212) 736-54263', email: 'amal@gmail.com', type: 'etudiante' },
    { id: 3, nom: 'Salim Beniss4', date: '07/03/2024', telephone: '(212) 656-54263', email: 'salim@gmail.com', type: 'etudiante' },
    { id: 4, nom: 'Aya Essou3', date: '08/03/2024', telephone: '(212) 744-00082', email: 'aya@gmail.com', type: 'client' }
  ];
  const [page, setPage] = useState(1);
  const usersPerPage = 7;
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const handleChange = (event, value) => {
    setPage(value);
  };
  const [utilisateurs, setUtilisateurs] = useState(initialUtilisateur);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUtilisateurs = utilisateurs.filter((utilisateur) =>
    utilisateur.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);
  return (
    <div className='container_user'>
      <div className='search'>
        <img src={loupe} alt='loupe' className='loupe' />
        <input
          className='search_input'
          type='text'
          placeholder='Rechercher par nom...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='tableau_7489'>
        <div className='thead'>
          <div className='head'>Utilisateurs</div>
          <div className='head'>Date</div>
          <div className='head'>Téléphone</div>
          <div className='head'>Email</div>
          <div className='head'>Type</div>
          <div className='head'>Statut</div>
        </div>
        <div className='tbody'>
          {filteredUtilisateurs.slice(startIndex, endIndex).map((utilisateur, index) => (
            <div className="myRowUser">
              <div className="myRowUserItem">{utilisateur.nom}</div>
              <div className="myRowUserItem">{utilisateur.date}</div>
              <div className="myRowUserItem">{utilisateur.telephone}</div>
              <div className="myRowUserItem">{utilisateur.email}</div>
              <div className="myRowUserItem">{utilisateur.type}</div>
              <div className="myRowUserItem placeButtonAction">
                <div className="BtnItem BtnWarningUser">
                  <img src={bloquer_w} className="iconBtnAction" />
                </div>
                <div className="BtnItem BtnBlockUser">
                  <img src={supprimer_w} className="iconBtnAction" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='pagination_utilisateur'>
        <Pagination
          count={Math.ceil(filteredUtilisateurs.length / usersPerPage)}
          page={page}
          onChange={handleChange}
          sx={{
            '& .Mui-selected': {
              backgroundColor: '#fceec3',
              color: 'black'
            }
          }}
        />
      </div>

    </div>
  );
}

export default Utilisateur;
