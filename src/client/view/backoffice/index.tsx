import { Layout, Button, Row, Col } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useState } from "react";
import "antd/dist/antd.less";
import "./app.css";
import { BackofficeMenu } from "./menu";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Form } from "antd";

interface IProps {
    children?: FunctionComponent;
}

const { Header, Sider, Content } = Layout;

export const AppTemplate = React.memo((props: IProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    {" "}
                    {React.createElement(
                        collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                        {
                            className: "trigger",
                            onClick: () => setCollapsed(!collapsed),
                        },
                    )}
                </div>

                <BackofficeMenu />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{ padding: 0 }}
                >
                    <Form.Item labelAlign="right">
                        <Row gutter={[16, 16]} justify="end" align="middle">
                            <Col style={{ padding: "0px", margin: "20px" }}>
                                <Link to={"/"}>
                                    <Button type="primary" size="large">
                                        {"Перейти на сайт"}
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Form.Item>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    );
});
