export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _keep?: Maybe<Scalars['Boolean']>;
  users: UsersQuery;
  news: NewsQuery;
  products: ProductsQuery;
};

export type Mutation = {
  __typename?: 'Mutation';
  _keep?: Maybe<Scalars['Boolean']>;
  news: NewsMutation;
  products: ProductsMutation;
};

export type UsersQuery = {
  __typename?: 'UsersQuery';
  allUsers?: Maybe<Array<Maybe<UserType>>>;
};

export type UserType = {
  __typename?: 'UserType';
  _id?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
};

export type NewsQuery = {
  __typename?: 'NewsQuery';
  allNews?: Maybe<Array<Maybe<NewsType>>>;
};

export type NewsMutation = {
  __typename?: 'NewsMutation';
  addNews?: Maybe<Scalars['Boolean']>;
  updateNews?: Maybe<Scalars['Boolean']>;
  deleteNews?: Maybe<Scalars['Boolean']>;
};


export type NewsMutationAddNewsArgs = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};


export type NewsMutationUpdateNewsArgs = {
  value?: Maybe<NewsInput>;
};


export type NewsMutationDeleteNewsArgs = {
  id?: Maybe<Scalars['String']>;
};

export type NewsType = {
  __typename?: 'NewsType';
  _id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type NewsInput = {
  _id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type ProductsQuery = {
  __typename?: 'ProductsQuery';
  allProducts?: Maybe<Array<Maybe<ProductType>>>;
};

export type ProductsMutation = {
  __typename?: 'ProductsMutation';
  addProduct?: Maybe<Scalars['Boolean']>;
  updateProduct?: Maybe<Scalars['Boolean']>;
  deleteProduct?: Maybe<Scalars['Boolean']>;
};


export type ProductsMutationAddProductArgs = {
  value?: Maybe<ProductInput>;
};


export type ProductsMutationUpdateProductArgs = {
  value?: Maybe<ProductInput>;
};


export type ProductsMutationDeleteProductArgs = {
  id?: Maybe<Scalars['String']>;
};

export type ProductType = {
  __typename?: 'ProductType';
  _id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  isDisplayed?: Maybe<Scalars['Boolean']>;
};

export type ProductInput = {
  _id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  imagePath?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['Int']>;
  isDisplayed?: Maybe<Scalars['Boolean']>;
};
