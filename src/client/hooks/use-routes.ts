import { useMemo, ReactNode, FunctionComponent } from "react";
import { AppTemplate } from "../view/backoffice";
import { Users } from "../view/backoffice/users";
import { Dashboard } from "../view/backoffice/dashboard";
import { News } from "../view/backoffice/news";
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    // TeamOutlined,
    UserOutlined,
    ShoppingCartOutlined, FileDoneOutlined,
} from "@ant-design/icons";
import { SiteTemplate } from "../view/site";
import { SiteHomePage } from "../view/site/home";
import { Products } from "../view/backoffice/products";
import { Category } from "../view/backoffice/category";

interface IRoute {
    name: string,
    path: string,
    component: FunctionComponent,
    exact?: boolean,
    icon?: ReactNode,
    children: Array<{
        name: string,
        path: string
        component: FunctionComponent
        exact?: boolean,
        icon?: FunctionComponent,
    }>
}

export function useRoutes() {
    return useMemo(() => [
        {
            name: "admin",
            path: "/admin/:path?",
            component: AppTemplate,
            exact: true,
            icon: DesktopOutlined,
            children: [
                {
                    name: "Users",
                    path: "/admin",
                    component: Users,
                    exact: true,
                    icon: UserOutlined,
                },
                {
                    name: "Dashboard",
                    path: "/admin/dashboard",
                    component: Dashboard,
                    icon: PieChartOutlined,
                },
                {
                    name: "News",
                    path: "/admin/news",
                    component: News,
                    icon: FileOutlined,
                },
                {
                    name: "Products",
                    path: "/admin/products",
                    component: Products,
                    icon: ShoppingCartOutlined,
                },
                {
                    name: "Category",
                    path: "/admin/category",
                    component: Category,
                    icon: FileDoneOutlined,
                },
            ],

        },
        {
            name: "site",
            path: "/:path?",
            component: SiteTemplate,
            exact: true,
            children: [
                {
                    name: "Index",
                    path: "/",
                    component: SiteHomePage,
                    exact: true,
                    icon: UserOutlined,
                },
                {
                    name: "category",
                    path: "/category",
                    component: SiteHomePage,
                    icon: UserOutlined,
                },
            ],
        },

    ] as IRoute[], []);
}
