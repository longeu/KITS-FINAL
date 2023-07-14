/* eslint-disable react/jsx-key */
import { useState } from "react";
import Row from "./Row";
import './CheckBoard.css'
import { Col, Space } from "antd";
import { ChessIcon } from "../../assets/chessIcon";


export const CheckBoard = () => {
    const [num, setNum] = useState(5);
    const [evenColor, setEvenColor] = useState("#598496");
    const [oddColor, setOddColor] = useState("#FFFFFF");
    // const [inputNum, setInputNum] = useState(1);
    function onChangeNum(value) {
        // setInputNum(value);
        setNum(value)
    }

    function onChangeEvenColor(value) {
        setEvenColor(value);
    }

    function onChangeOddColor(value) {
        setOddColor(value);
    }
    const rows = Array.from(Array(Number(num)).keys());
    function changeColor() {
        onChangeEvenColor(oddColor);
        onChangeOddColor(evenColor);
    }

    return (
        <div className="image-bg" >
            <Col span={8} className="content-header checkboard">
                <ChessIcon />
                <h1 className="header-title">Check Board</h1>
            </Col>
            <div className="content-body">
                <div className="input-board">
                    <Space direction={"vertical"} style={{ width: "100%" }}>
                        <label>Please Enter your number:</label>
                        <input className="input-checkboard" type="number" value={num} onChange={(e) => onChangeNum(e.target.value)} min={1} max={10}></input>

                        {/* <button type="button" onClick={() => click()}>Nhập</button> */}
                        <label>Enter your color even: </label>
                        <input type="color" className="input-checkboard" onChange={(e) => onChangeEvenColor(e.target.value)} value={evenColor}></input>
                        <label>Enter your color odd: </label>
                        <input type="color" className="input-checkboard" onChange={(e) => onChangeOddColor(e.target.value)} value={oddColor}></input>
                    </Space>
                </div>
                <div className="board" onClick={() => changeColor()}>
                    {rows.map((idx) => {
                        var rowType = idx % 2 == 0 ? "odd" : "even";
                        return (
                            <Row key={idx} size={Number(num)} rowType={rowType} evenColor={evenColor} oddColor={oddColor}></Row>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}