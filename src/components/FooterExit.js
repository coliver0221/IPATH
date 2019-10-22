import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import exitIcon from '../img/icons8-enter-50-2.png';



function FooterExit () {
    return(
        <div className='footer'>
            <Link to="/">
            <div className='footer-item-block'>
                    <img src={exitIcon} alt="Shop" />
                    <p>重新登入</p>
                </div>
            </Link>
        </div>
    );
}

export default FooterExit;