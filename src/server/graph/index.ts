import { ApolloServer, gql } from "apollo-server-express";

import { makeExecutableSchema } from "graphql-tools";
import { userResolvers, userTypeDeff } from "./user";
import { RequestContext } from "../request-context";


const queryType = gql`
    type Query{
        _keep: Boolean
    }
`;

const typeDefs = [
    queryType,
    userTypeDeff,
];

const resolvers = { ...userResolvers };

const schema = makeExecutableSchema({ typeDefs, resolvers });

export const apolloServer = new ApolloServer({ schema, context: ({ req }) => new RequestContext(req) });
