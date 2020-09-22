import { Menu } from "antd";
import { useRoutes } from "../../hooks/use-routes";
import { Link } from "react-router-dom";

export const BackofficeMenu = React.memo(() => {
    const routes = useRoutes();

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {routes
                .find(route => route.name === "admin")
                .children.map((route, indexRoute) => (
                    <Menu.Item
                        key={`menu-item-${indexRoute}`}
                        icon={<route.icon />}
                    >
                        <Link to={route.path}>{route.name}</Link>
                    </Menu.Item>
                ))}
        </Menu>
    );
});
