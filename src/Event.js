import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

function Event() {
    return (
        <dev>
            <Nav />
            <h1>Event Page</h1>
            <Footer currPage={"event"} />
        </dev>
    );
}

export default Event;