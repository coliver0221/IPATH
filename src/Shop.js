import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";

import Nav from './components/Nav';
import Footer from './components/Footer';

const UserInfo = styled.div`
    width: 100%;
    height: 14vh;
    text-align: center;
    line-height: 1.5;
    padding-top: 3vh;

    h1 {
        font-size: 29px;
        color: #4a4a4a;
    }
`;

const CurrPoint = styled.div`
    p {
        font-size: 24px;
        color: #4a4a4a;
        display: inline-block;
        margin-left: 5px;
        margin-right: 5px;
    }

    .dot {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #0c5ebe;
        display: inline-block;
    }

    .point {
        color: #0c5ebe;
    }
`;

const ItemInfo = styled.div`
    width: 100%;
    height: 52.5vh;
    background-color: #ffffff;
    text-align: center;
    padding-top: 5vh;

    .shopHint {
        font-size: 25px;
        color: #033793;
    }
`;

const BlockRight = styled.div`
    width: 43vw;
    height: 30vh;
    background-color: #94aaad;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 3vh;
    position: relative;
    margin-left: 2vw;
`;

const BlockLeft = styled.div`
    width: 43vw;
    height: 30vh;
    background-color: #94aaad;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    margin-top: 3vh;
    position: relative;
    margin-right: 2vw;
`;

const ItemBlockLeft = styled.div`
    display: inline-block;
    line-height: 1.5;

    .itemName {
        font-size: 22px;
        margin-top: 2vh;
    }

    .itemCost {
        font-size: 22px;
    }
`;

const ItemBlockRight = styled.div`
    display: inline-block;
    line-height: 1.5;

    .itemName {
        font-size: 22px;
        margin-top: 2vh;
    }

    .itemCost {
        font-size: 22px;
    }
`;

const ConfirmBody = styled.div`
    width: 100%;
    height: 66.5vh;
    background-color: #ffffff;
    text-align: center;
    padding-top: 3vh;

    .itemName {
        font-size: 25px;
        color: #4a4a4a;
    }
`;

const ConfirmBlock = styled.div`
    width: 45vw;
    height: 26vh;
    background-color: #94aaad;
    border: soild 2px transparent;
    box-sizing:border-box;
    border-radius: 10%;
    position: absolute;
    top: 32vh;
    left: 27.5vw;
`;

const Cost = styled.div`
    width: 100%;
    font-size: 26px;
    position: absolute;
    bottom: 32vh;

    p {
        display: inline-block;
        letter-spacing: 2px;
    }

    .point {
        color: #0c5ebe;
    }
`;

function Shop() {
    const testing_point = 116;
    const testing_item1 = "紅茶 + 飲料提袋";
    const testing_item2 = "FA紀念包";
    const testing_cost1 = 100;
    const testing_cost2 = 100;

    const [page, setPage] = useState("shop");
    const [item, setItem] = useState(null);
    const [cost, setCost] = useState(0);

    if (page === "shop") {
        return (
            <div>
                <Nav title={"IPATH 學生點數系統"}/>
                <UserInfo>
                    <h1>UserName</h1>
                    <CurrPoint>
                        <div className="dot"></div>
                        <p>目前持有 </p>
                        <p className="point">{testing_point}</p>
                        <p> 點</p>
                        <div className="dot"></div>
                    </CurrPoint>
                </UserInfo>
                <ItemInfo>
                    <p className="shopHint">請選擇欲兌換之商品</p>
                    <ItemBlockLeft onClick={() => {setPage("confirm"); setItem(testing_item1); setCost(testing_cost1);}}>
                        <BlockLeft />
                        <p className="itemName">{testing_item1}</p>
                        <p className="itemCost">{testing_cost1} 點</p>
                    </ItemBlockLeft>
                    <ItemBlockRight onClick={() => {setPage("confirm"); setItem(testing_item2); setCost(testing_cost2);}}>
                        <BlockRight />
                        <p className="itemName">{testing_item2}</p>
                        <p className="itemCost">{testing_cost2} 點</p>
                    </ItemBlockRight>
                </ItemInfo>
                <Footer currPage={"shop"} />
            </div>
        );
    } else if (page === "confirm") {
        return (
            <div>
                <Nav title={"IPATH 學生點數系統"}/>
                <ConfirmBody>
                    <p className="itemName">{item}</p>
                    <ConfirmBlock />
                    <Cost>
                        <p>本次兌換需要 </p>
                        <p className="point">{cost}</p>
                        <p> 點</p>
                    </Cost>
                    
                </ConfirmBody>
                <Footer currPage={"shop"} />
            </div>
        );
    } else if (page === "success") {
        return (
            <div>
                
            </div>
        );
    }
}

export default Shop;