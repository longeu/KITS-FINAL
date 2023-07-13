import { Layout } from "antd"
import { Content, Footer } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"
import HeaderBar from "../Header/HeaderBar"
import { SiderBar } from "../SiderBar/SideBar"

export const MainLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderBar />
            <Layout>
                <HeaderBar />
                <Content>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}