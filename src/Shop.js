import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

function Shop() {
    return (
        <dev>
            <Nav title={"IPATH 學生點數系統"}/>
            <h1>Shop Page</h1>
            <Footer currPage={"shop"} />
        </dev>
    );
}

export default Shop;