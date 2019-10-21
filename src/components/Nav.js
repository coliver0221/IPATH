import React from 'react';
import '../App.css';

function Nav (props) {
    return(
        <div className='Nav'>
            <p>{props.title}</p>
        </div>
    );
}

export default Nav;