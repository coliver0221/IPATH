import React from 'react';
import styled from "styled-components";
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import ipathImg from './img/IPATH.jpg';
import tainanImg from './img/Tainan.jpg';

const EventBlockLeft = styled.div`
    width: 43vw;
    height: 30vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 15vh;
    position: relative;
    margin-right: 2vw;
`;

const EventBlockRight = styled.div`
    width: 43vw;
    height: 30vh;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 15vh;
    position: relative;
    margin-left: 2vw;
`;

const BlockTitle = styled.div`
    width: 100%;
    height: 6vh;
    text-align: center;
    background-color: #000000;
    border-top: solid 1px #ffffff;
    border-bottom: solid 1px #ffffff;
    position: absolute;
    top: 12vh;

    p {
        width: 100%;
        color: #ffffff
        letter-spacing: 2px;
        font-size: 30px;
        line-height: 6vh;
    }
`;

const BottomBody = styled.div`
    width: 100%
    height: 12vh;
    background-color: #ffffff;
    text-align: center;

    p {
        width: 100%;
        color: #9b9b9b;
        font-size: 22px;
        padding: 4vh;
    }
`;

function Event() {
    return (
        <div className="event">
            <Nav title={"IPATH 學生點數系統"}/>
            <div className="innerBoby">
                <p className="innerTitle">活動選擇</p>
                <EventBlockLeft src={ipathImg}>
                    <BlockTitle>
                        <p>智能運動地墊系統</p>
                    </BlockTitle>
                </EventBlockLeft>
                <EventBlockRight src={tainanImg}>
                    <BlockTitle>
                        <p>踏溯台南點數系統</p>
                    </BlockTitle>
                </EventBlockRight>
            </div>
            <BottomBody>
                <p>・・活動陸續更新・・</p>
            </BottomBody>
            <Footer currPage={"event"} />
        </div>
    );
}

export default Event;