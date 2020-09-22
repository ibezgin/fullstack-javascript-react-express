import React from "react";
import { RootView } from "./view";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

export const App = () => {
    const client = new ApolloClient({
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <RootView />
        </ApolloProvider>
    );
};
