import Cell from "./Cell";
import "./CheckBoard.css"

// eslint-disable-next-line react/prop-types
function Row({ size, rowType, evenColor, oddColor }) {
    const rows = Array.from(Array(size).keys());
    return (
        <div>
            {rows.map((idx) => {
                var color;
                if (rowType === "even") {
                    color = idx % 2 == 0 ? evenColor : oddColor;
                } else {
                    color = idx % 2 != 0 ? evenColor : oddColor;
                }
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Cell key={idx} style={color}></Cell>
                );
            })}
        </div>
    );
}

export default Row;
