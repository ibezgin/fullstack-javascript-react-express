/* eslint-disable @typescript-eslint/interface-name-prefix */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}

export interface Query {
    __typename?: "Query";
    _keep?: Maybe<Scalars["Boolean"]>;
    users: UsersQuery;
    news: NewsQuery;
}

export interface Mutation {
    __typename?: "Mutation";
    _keep?: Maybe<Scalars["Boolean"]>;
    news: NewsMutation;
}

export interface UsersQuery {
    __typename?: "UsersQuery";
    allUsers?: Maybe<Array<Maybe<UserType>>>;
}

export interface UserType {
    __typename?: "UserType";
    _id?: Maybe<Scalars["String"]>;
    firstname?: Maybe<Scalars["String"]>;
}

export interface NewsQuery {
    __typename?: "NewsQuery";
    allNews?: Maybe<Array<Maybe<NewsType>>>;
}

export interface NewsMutation {
    __typename?: "NewsMutation";
    addNews?: Maybe<Scalars["Boolean"]>;
    updateNews?: Maybe<Scalars["Boolean"]>;
    deleteNews?: Maybe<Scalars["Boolean"]>;
}


export interface NewsMutationAddNewsArgs {
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
}


export interface NewsMutationUpdateNewsArgs {
    value?: Maybe<NewsInput>;
}


export interface NewsMutationDeleteNewsArgs {
    id?: Maybe<Scalars["String"]>;
}

export interface NewsType {
    __typename?: "NewsType";
    _id?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
}

export interface NewsInput {
    _id?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    content?: Maybe<Scalars["String"]>;
}
