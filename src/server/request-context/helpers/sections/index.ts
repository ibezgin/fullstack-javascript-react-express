import { UserContextHelper } from "./user";
import { AbstractRequestContextHelper } from "../../abstract-request-context-helper";

export class SectionsContextHelper extends AbstractRequestContextHelper {
    public get user() {
        return new UserContextHelper(this.context);
    }

}
