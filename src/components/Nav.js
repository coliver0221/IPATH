import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Nav (props) {
    return(
        <div className='Nav'>
            <p>{props.title}</p>
        </div>
    );
}

export default Nav;