import React, { useState } from "react";
import styled from "styled-components";
import QrReader from "react-qr-reader";
import "./App.css";

const Rectangle = styled.div`
  position: fixed;
  padding: 5vh 5vh 5vh 0;
  max-width: 100vw;
  height: 43vh;
  left: 0;
  bottom: 10vh;
  background-color: #000000;
  display: flex;

  .circle {
    position: relative;
    background-color: white;
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    margin-left: -5vh;
    left: -15vh;
  }

  .qr-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .qr-text {
    letter-spacing: 0.5px;
    text-align: center;
    margin-top: 10px;
    color: #cfcfcf;
    font-size: 20px;
  }
`;

const QRScanner = styled(QrReader)`
  width: 30vh;
  height: 30vh;
  border: solid 3px #aaaaaa;
`;

function Login() {
  const [result, setResult] = useState(null);
  const onScan = data => {
    if (data) {
      setResult(data);
      alert(`我掃到的資料是：${data}`);
    }
  };
  return (
    <div className="App">
      <p><bold>{result}</bold></p>
      <div id="container">
        <div id="Oval-Copy"></div>
        <div id="Oval"></div>
        <div id="Oval_in"></div>
        <Rectangle>
          <div className="circle" />
          <div className="qr-wrapper">
            <QRScanner
              delay={300}
              onError={err => alert(err)}
              onScan={onScan}
              showViewFinder={false}
              facingMode="environment"
            />
            <p className="qr-text">請掃描登入使用者身份</p>
          </div>
        </Rectangle>
      </div>
    </div>
  );
}

export default Login;
