import React from 'react';
import '../App.css';

import imgShopOri from '../img/icons8-shop-50.png';
import imgEventOri from '../img/icons8-event-select-50.png';

function Footer () {
    return(
        <div className='footer'>
            <div className='footer-item-block'>
                <img src={imgEventOri} alt="Profile" />
                <p>個人頁面</p>
            </div>
            <div className='footer-item-block'>
                <img src={imgEventOri} alt="Event" />
                <p>活動選擇</p>
            </div>
            <div className='footer-item-block'>
                <img src={imgShopOri} alt="Shop" />
                <p>商品兌換</p>
            </div>
        </div>
    );
}

export default Footer;