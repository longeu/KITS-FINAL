import { Button, Form, Input } from "antd"
import baseApi from "../../api/baseApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.css';


export const Login = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        const url = "/authenticate";

        try {
            const response = await baseApi.post(url, data);
            localStorage.setItem("currentUser", JSON.stringify(response));
            navigate("/")
        } catch (error) {
            console.log(error);
            setMessage("Tài khoản hoặc mật khẩu không chính xác !");
        }
    };
    const onFinishFailed = () => {
        console.log('Failed:', message);
    };

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item>
                <h1>Form Login</h1>
            </Form.Item>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}