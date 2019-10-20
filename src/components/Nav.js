import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Nav (props) {
    return(
        <div className='Nav'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Nav;