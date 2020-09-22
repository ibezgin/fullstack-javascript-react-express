import { useRoutes } from "../hooks/use-routes";
import { Switch, Route } from "react-router";

export const Router = React.memo(() => {
    const routes = useRoutes();

    return (
        <Switch>
            {routes.map((route, indexRoute) => (
                <Route
                    path={route.path}
                    key={`route-${indexRoute}`}
                    exact={route.exact}
                >
                    <route.component>
                        <Switch>
                            {route.children.map((childRoute, indexChild) => (
                                <Route
                                    path={childRoute.path}
                                    component={childRoute.component}
                                    key={`child-route-${indexRoute}-${indexChild}`}
                                    exact={childRoute.exact}
                                />
                            ))}
                        </Switch>
                    </route.component>
                </Route>
            ))}
        </Switch>
    );
});
