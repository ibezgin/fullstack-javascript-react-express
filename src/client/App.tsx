import React from "react";
import { RootView } from "./view";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export const App = () => {
    // console.log(window.location);
    const client = new ApolloClient({
        uri: `${window.location.protocol}//${window.location.host}/graphql`,
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <RootView />
        </ApolloProvider>
    );
};
