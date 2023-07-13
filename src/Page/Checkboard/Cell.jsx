import './CheckBoard.css';
// eslint-disable-next-line react/prop-types
function Cell({ style }) {
    return (
        <div className="cell" style={{ backgroundColor: `${style}` }}></div>
    );
}

export default Cell;