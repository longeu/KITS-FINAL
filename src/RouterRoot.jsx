import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckBoard from './Page/Checkboard/CheckBoard';

const items = [
    {
        label: "checkboard",
        key: "checkboard",
        path: <CheckBoard />
    },
    {
        label: "Chess",
        key: "chess",
    },
    {
        label: "HelloWorld",
        key: "HelloWorld",
    },
];
export default function RouterRoot() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/time">
                        {/* <Time /> */}
                    </Route>
                    <Route path="/boardnumber">
                        {/* <BoardNumber /> */}
                    </Route>
                    <Route path="/chessboard" element={items.path}>
                    </Route>
                    <Route path="/minesweep">
                        {/* <Minesweep /> */}
                    </Route>
                    <Route path="/">
                        {/* <HelloWorld /> */}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}