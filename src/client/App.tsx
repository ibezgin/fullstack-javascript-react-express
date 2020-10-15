import React from "react";
import { RootView } from "./view";
import { Provider } from "react-redux";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ReduxStoreCreator } from "./service/store";

export const App = () => {
    // console.log(window.location);
    const client = new ApolloClient({
        uri: `${window.location.protocol}//${window.location.host}/graphql`,
        cache: new InMemoryCache(),
    });

    const preloadedState: any = ReduxStoreCreator.getPreloadedState();
    const store = ReduxStoreCreator.createStore(preloadedState, true);

    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <RootView />
            </Provider>
        </ApolloProvider>
    );
};
