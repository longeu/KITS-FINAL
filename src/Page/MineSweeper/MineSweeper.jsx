import { useEffect, useState } from "react"
import './MineSweeper.css'
import { Button, Col } from "antd";
import { BomIcon } from "../../assets/bomIcon";
import { Board } from "./Board";

const ROWS = 10;
const MINES = 10;
export const MineSweeper = () => {
    const [board, setBoard] = useState([])
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);
    // const [input, setInput] = useState(10);

    useEffect(() => {
        createBoard();
        if (gameOver) {
            revealMines();
        }
    }, [gameOver])

    function createBoard() {
        let newBoard = [];
        for (let row = 0; row < ROWS; row++) {
            let rowData = [];
            for (let col = 0; col < ROWS; col++) {
                rowData.push({
                    row, col, isMine: false, isOpen: false, neighborMines: 0
                });
            }
            newBoard.push(rowData);
        }
        let mineCount = 0;
        while (mineCount < MINES) {
            let randomRow = Math.floor(Math.random() * ROWS);
            let randowCol = Math.floor(Math.random() * ROWS);
            if (!newBoard[randomRow][randowCol].isMine) {
                newBoard[randomRow][randowCol].isMine = true;
                mineCount++;
            }
        }
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < ROWS; col++) {
                if (!newBoard[row][col].isMine) {
                    let neighborMines = 0;
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            if (row + i >= 0 &&
                                row + i < ROWS &&
                                col + j >= 0 &&
                                col + j < ROWS &&
                                newBoard[row + i][col + j].isMine) {
                                neighborMines++;
                            }
                        }
                    }
                    newBoard[row][col].neighborMines = neighborMines;
                }
            }
        }
        setBoard(newBoard);
    }

    function handleCellClick(row, col) {
        if (gameOver) {
            return;
        }
        let newBoard = [...board];
        let cell = newBoard[row][col];
        if (cell.isOpen) {
            return;
        }
        cell.isOpen = true;
        if (cell.isMine) {
            setBoard(newBoard);
            setGameOver(true);
        } else if (cell.neighborMines === 0) {
            openNeighborCells(row, col, newBoard);
        } else {
            setBoard(newBoard);
        }

        if (checkWin(newBoard)) {
            setGameOver(true);
            setWin(true);
        }
    }
    function openNeighborCells(row, col, newBoard) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (
                    row + i >= 0 &&
                    row + i < ROWS &&
                    col + j >= 0 &&
                    col + j < ROWS &&
                    !newBoard[row + i][col + j].isOpen &&
                    !newBoard[row + i][col + j].isMine
                ) {
                    newBoard[row + i][col + j].isOpen = true;
                    if (newBoard[row + i][col + j].neighborMines === 0) {
                        openNeighborCells(row + i, col + j, newBoard);
                    }
                }
            }
        }
        setBoard(newBoard);
    }
    function checkWin(newBoard) {
        let openCellCount = 0;
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < ROWS; col++) {
                if (newBoard[row][col].isOpen) {
                    openCellCount++;
                }
            }
        }
        return openCellCount === ROWS * ROWS - MINES;
    }
    function revealMines() {
        let newBoard = [...board];
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < ROWS; col++) {
                if (newBoard[row][col].isMine) {
                    newBoard[row][col].isOpen = true;
                }
            }
        }
        setBoard(newBoard);
    }

    function restartGame() {
        setGameOver(false);
        setWin(false);
    }
    return (
        <div >
            <Col span={8} className="content-header">
                <BomIcon />
                <h1 className="header-title">Mine Sweeper</h1>
            </Col>
            <div className="content-body">
                {gameOver || win ?
                    <div className="restart-button">
                        <Button onClick={restartGame}>Start</Button>
                    </div>
                    : null}
                <div className="ms-board">
                    <Board board={board} handleCellClick={handleCellClick} />
                </div>
                {gameOver && <div className="message">Game Over!</div>}
                {win && <div className="message">You Win!</div>}
            </div>
        </div>
    )
}