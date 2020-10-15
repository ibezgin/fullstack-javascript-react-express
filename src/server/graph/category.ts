import { gql, IResolvers } from "apollo-server-express";
import { RequestContext } from "../request-context";

export const productsTypeDeff = gql`
    extend type Query {
        category: ProductsQuery!
    }
    extend type Mutation{
        category: ProductsMutation!
    }
    type CategoryQuery{
        allCategory: [CategoryType]
    }
    type CategoryMutation {
        addProduct(value:CategoryInput):Boolean
        # updateProduct(value: ProductInput):Boolean
        # deleteProduct(id: String):Boolean
    }
    type ProductType{
        _id: String
        title: String
        imagePath: String
    }
    input CategoryInput {
        _id: String
        title: String
        imagePath: String
    }
`;
export const productsResolvers: IResolvers<any, RequestContext> = {
    Query: {
        category: () => ({}),
    },
    Mutation: {
        category: () => ({}),
    },
    CategoryQuery: {
        allCategory: async (obj, props, { helpers }) =>
            await helpers.sections.category.allCategory(),
    },
    CategoryMutation: {
        addCategory: async (obj, { value }, { helpers }) =>
            await helpers.sections.category.addCategory(value),
        // updateProduct: async (obj, { value }, { helpers }) =>
        //     await helpers.sections.products.updateProduct(value),
        // deleteProduct: async (obj, { id }, { helpers }) =>
        //     await helpers.sections.products.deleteProduct(id),
    },
};
