export const Board = ({ board, handleCellClick }) => {
    return board.map((row, rowIndex) => (
        <div className="ms-row" key={rowIndex}>
            {row.map((cell, colIndex) => (
                <div
                    className={`ms-cell ${cell.isOpen ? 'open' : ''}`}
                    key={colIndex}
                    onClick={() => handleCellClick(cell.row, cell.col)}
                >
                    {cell.isOpen && !cell.isMine && cell.neighborMines > 0 && cell.neighborMines}
                    {cell.isOpen && cell.isMine && <span role="img" aria-label="mine">💣</span>}
                </div>
            ))}
        </div>
    ));
}