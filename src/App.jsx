import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { MainLayout } from './Layout/MainLayout/MainLayout';
import { Pomodoro } from './Page/Pomodoro/Pomodoro';
import { Result, Button } from "antd"
import { MineSweeper } from './Page/MineSweeper/MineSweeper';
import { Calculater } from './Page/Calculater/Calculater';
import { CheckBoard } from './Page/Checkboard/CheckBoard';
import { Quotes } from './Page/Quotes/quotes';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';
import { Login } from './Page/Login/Login';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<CheckBoard />} />
                        <Route path='/checkboard' element={<CheckBoard />} />
                        <Route path='/calculater' element={<Calculater />} />
                        <Route path='/minesweeper' element={<MineSweeper />} />
                        <Route path='/pomodoro' element={<Pomodoro />} />
                        <Route path='/quotes' element={<Quotes />} />
                        <Route path="*" element={
                            <Result status="404" title="Không tìm thấy" subTitle="Bạn hay kiểm tra lại link của mình nhé!"
                                extra={<Button type="link"><NavLink to={"/checkboard"}>HOME</NavLink></Button>}
                            />
                        } />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;