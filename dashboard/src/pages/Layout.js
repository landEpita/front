import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from "@ant-design/icons"
import Board from "../components/Board"
import logo from "../assets/logo.png"

const { Header, Sider, Content } = Layout

const SiderDemo = () => {
    const [state, setState] = useState({
        collapsed: false,
    })

    const toggle = () => {
        setState({
            collapsed: !state.collapsed,
        })
    }
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={state.collapsed}>
                <div className="logo">
                    {state.collapsed === false ? <img src={logo} alt="ok" /> : null}
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        About
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Service
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        Contact
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(
                        state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: toggle,
                        },
                    )}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "15px 15px",
                        minHeight: 280,
                        height: "100vh",
                        overflow: "hidden",
                    }}
                >
                    <Board />
                    {/* Content */}
                </Content>
            </Layout>
        </Layout>
    )
}

export default SiderDemo
