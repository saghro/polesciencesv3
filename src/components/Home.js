import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
   
    return (
        <div className="">
            <Link to="/login" className="loginLink">log in</Link>
        </div>
    );
}

export default Home;
