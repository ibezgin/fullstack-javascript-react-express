import { FunctionComponent } from "react";
import { Layout, Menu } from "antd";
import { SiteStyled } from "./global.site";

const { Header, Content, Footer } = Layout;

interface IProps {
    children: FunctionComponent;
}
export const SiteTemplate = React.memo((props: IProps) => {
    return (
        <SiteStyled>
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </Header>
                <Content
                    className="site-layout"
                    style={{ padding: "0 50px", marginTop: 64 }}
                >
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 380 }}
                    >
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </SiteStyled>
    );
});
