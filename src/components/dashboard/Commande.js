import React, { useEffect, useState } from 'react';
import './Commande.css';
import loupe from '../../imgs/loupe.png';
import Pagination from '@mui/material/Pagination';
import supprimer_w from '../../imgs/supprimer_w.png';
import valider_w from '../../imgs/valider_w.png';

function Commande() {
  const initialOrders = [
    { id: 1, nom: 'Mouad ', date: '2024-03-13', confirmed: false },
    { id: 2, nom: 'sam', date: '2024-03-14', confirmed: false },
    { id: 3, nom: 'lamie', date: '2024-03-14', confirmed: false },
    { id: 4, nom: 'samir', date: '2024-03-14', confirmed: false },
    { id: 1, nom: 'Mouad ', date: '2024-03-13', confirmed: false },
    { id: 2, nom: 'sam', date: '2024-03-14', confirmed: false },
    { id: 3, nom: 'lamie', date: '2024-03-14', confirmed: false },
    { id: 4, nom: 'samir', date: '2024-03-14', confirmed: false },
    { id: 1, nom: 'Mouad ', date: '2024-03-13', confirmed: false },
    { id: 2, nom: 'sam', date: '2024-03-14', confirmed: false },
    { id: 3, nom: 'lamie', date: '2024-03-14', confirmed: false },
    { id: 4, nom: 'samir', date: '2024-03-14', confirmed: false }

  ];
  const [page, setPage] = useState(1);
  const usersPerPage = 7;
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const handleChange = (event, value) => {
    setPage(value);
  };
  const [orders, setOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState('');

  const handleConfirmOrder = (id) => {
    const updatedOrders = orders.map(order =>
      order.id === id ? { ...order, confirmed: true } : order
    );
    setOrders(updatedOrders);
  };

  const handleRejectOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  const filteredOrders = orders.filter(order =>
    order.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  return (
    <>
      <div className='container_order'>
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
        <div className='tableau_74'>
          <div className='theadsRowOrder'>
            <div className='myRowOrderItem tabHeadrOrders'>Date</div>
            <div className='myRowOrderItem tabHeadrOrders'>ID de commande</div>
            <div className='myRowOrderItem tabHeadrOrders'>Nom</div>
            <div className='myRowOrderItem tabHeadrOrders'>Action</div>
          </div>
          <div className='tbodys'>
            {filteredOrders.slice(startIndex, endIndex).map((order, key) => (
              <div className="myRowUser">
              <div className="myRowOrderItem">{order.date}</div>
              <div className="myRowOrderItem">{order.id}</div>
              <div className="myRowOrderItem">{order.nom}</div>
              <div className="myRowUserItem placeButtonAction">
                <div className="BtnItem BtnWarningUser">
                  <img src={valider_w} className="iconBtnAction" />
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
            count={Math.ceil(filteredOrders.length / usersPerPage)}
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


    </>
  );
}

export default Commande;