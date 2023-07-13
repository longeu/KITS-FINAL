import { Header } from "antd/es/layout/layout";
import './header.css'
import { Image, Space } from "antd";
import face from "../../assets/face.jpg"

export default function HeaderBar() {
    const imageStyle = {
        borderRadius: "50%",
        boxShadow: "0 3px 6px rgba(0, 0, 0, .16), 0 3px 6px rgba(0, 0, 0, .23)!important",
        padding: "5px"
    }
    return (
        <Header style={{ backgroundColor: "#598496" }}>
            <div className='top-nav-bar'>
                <div className="title">SUPER PROJECT</div>
                <div className="owner-name">
                    <Space>
                        <span>Nguyễn Hoàng Long</span>
                        <div style={{ width: "55px", height: "60px" }}>
                            <Image style={imageStyle} src={face} height={"100%"} width={'100%'}></Image>
                        </div>
                    </Space>
                </div>
            </div>
        </Header>
    )
}