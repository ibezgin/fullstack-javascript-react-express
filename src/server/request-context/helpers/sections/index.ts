import { UserContextHelper } from "./user";
import { AbstractRequestContextHelper } from "../../abstract-request-context-helper";
import { NewsContextHelper } from "./news";

export class SectionsContextHelper extends AbstractRequestContextHelper {
    public get user() {
        return new UserContextHelper(this.context);
    }
    public get news() {
        return new NewsContextHelper(this.context);
    }
}
