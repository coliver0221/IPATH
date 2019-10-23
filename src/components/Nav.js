import React from 'react';
import '../App.css';
import styled from "styled-components";

const Navigation = styled.div`
    width: 100%;
    height: 23vh;
    background-color: #ffffff;
    position: relative;
    text-align: center;

    p {
        position: relative;
        top: 50%;
        font-size: 35px;
        display: inline-block;
    }
`;

function Nav (props) {

    return(
        <Navigation>
            <p>{props.title}</p>
        </Navigation>
    );
}

export default Nav;