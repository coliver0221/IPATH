import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';

import userImg from './img/principle.png';

function Profile() {
    const testing_point = 116;

    return (
        <div className="profile">
            <Nav title={"IPATH 學生點數系統"}/>
            <div className="innerBoby">
                <div className="topBody"></div>
                <img src={userImg} alt="userImg" className="userImg" />
                <div className="userInfo">
                    <p className="userName">UserName</p>
                    <p className="nickName">NickName</p>
                </div>
            </div>
            <div className="bottomBody">
                <div className="userPoint">
                    <div class="dot"></div>
                    <p>目前持有 </p>
                    <p className="point">{testing_point}</p>
                    <p> 點</p>
                    <div class="dot"></div>
                </div>
            </div>
            <Footer currPage={"profile"} />
        </div>
    );
}

export default Profile;