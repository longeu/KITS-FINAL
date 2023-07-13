/* eslint-disable react/jsx-key */
import { Image, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import './SideBar.css';
import logo from "../../assets/sidebar-removebg.png"
// import smallLogo from "../../assets/smallSimbol-removebg.png"
import smallLogo from "../../assets/smallSidebar-removebg.png"
import { ChessIcon } from '../../assets/chessIcon';
import { PomoIcon } from '../../assets/pomoIcon';
import { BomIcon } from '../../assets/bomIcon';
import { CalculatorIcon } from "../../assets/calculatorIcon";
import { ThreeDotIcon } from "../../assets/threeDotIcon";

const menuItems = [
    {
        key: "/checkboard",
        label: "Check Board",
        icon: <ChessIcon />,
    },
    {
        key: "/calculater",
        label: "Calculater",
        icon: <CalculatorIcon />,
    },
    {
        key: "/minesweeper",
        label: "Mine Sweeper",
        icon: <BomIcon />,
    },
    {
        key: "/pomodoro",
        label: "Pomodoro",
        icon: <PomoIcon />,
    },
]
export const SiderBar = () => {
    const path = window.location.pathname;
    const [collapsed, setCollapsed] = useState(false);
    const imageStyle = {
        padding: !collapsed ? "10px 30px " : "15px",
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <Image style={imageStyle} height={75} width={'100%'} src={!collapsed ? logo : smallLogo} preview={false} />
            <div className='menu-name'>
                {!collapsed ? <label>MAIN MENU</label> : < ThreeDotIcon />}
            </div>
            <Menu defaultSelectedKeys={path === "/" ? "/checkboard" : path} theme="dark" mode="vertical" items={menuItems.map(item => {
                let item1 = item;
                item1.label = <NavLink to={item.key}>{item.label}</NavLink>
                return item1;
            })}>
            </Menu>
        </Sider>
    )
}