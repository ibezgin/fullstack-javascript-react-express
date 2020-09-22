import { ApolloServer, gql } from "apollo-server-express";

import { makeExecutableSchema } from "graphql-tools";
import { userResolvers, userTypeDeff } from "./user";
import { RequestContext } from "../request-context";
import { newsResolvers, newsTypeDeff } from "./news";


const queryType = gql`
    type Query{
        _keep: Boolean
    }
    type Mutation{
        _keep: Boolean
    }
`;

const typeDefs = [
    queryType,
    userTypeDeff,
    newsTypeDeff,
];

const resolvers = { ...userResolvers, ...newsResolvers };

// console.log(resolvers);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export const apolloServer = new ApolloServer({ schema, context: ({ req }) => new RequestContext(req) });
