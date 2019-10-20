import React from 'react';
import './App.css';

function App() {
  return (
    <div className="login">
      <div className="Oval-Copy">
        <div className="title">
          <p className="CH-Title">IPATH 學生點數系統</p>
          <p className="EN-Title">IPATH Student Point System</p>
        </div>
        <div className="desh"></div>
      </div>
      <div className="Oval"></div>
      <div className="Rectangle"></div>
      <div className="Oval_in"></div>
      <video className="scanner"></video>
      <p className="scanHint">請掃描登入使用者身分</p>
    </div>
  );
}

export default App;
