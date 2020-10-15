import { UserContextHelper } from "./user";
import { AbstractRequestContextHelper } from "../../abstract-request-context-helper";
import { NewsContextHelper } from "./news";
import { ProductsContextHelper } from "./products";
import { CategoryContextHelper } from "./category";

export class SectionsContextHelper extends AbstractRequestContextHelper {
    public get user() {
        return new UserContextHelper(this.context);
    }
    public get news() {
        return new NewsContextHelper(this.context);
    }
    public get products() {
        return new ProductsContextHelper(this.context);
    }
    public get category() {
        return new CategoryContextHelper(this.context);
    }
}
