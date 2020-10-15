import { getMongoManager } from "typeorm";
import { AbstractRequestContextHelper } from "../../abstract-request-context-helper";
// import { ProductsEntity } from "../../../db/entities/products";
// import _ from "lodash";
import { CategoryEntity } from "../../../db/entities/category";

export class CategoryContextHelper extends AbstractRequestContextHelper {
    public async allCategory() {
        const manager = getMongoManager();
        const result = await manager.find(CategoryEntity);
        return result;
    }
    public async addCategory(value: any) {
        const manager = getMongoManager();
        const product = new CategoryEntity(value.title, value.imagePath);
        const result = await manager.save(product);
        return !!result._id;
    }
    // public async updateProduct(value: any) {
    //     const manager = getMongoManager();
    //     return manager.update("products", value._id, { ..._.omit(value, ["_id"]) }).then(() => {
    //         return true;
    //     }).catch(() => {
    //         return false;
    //     });

    // }
    // public async deleteProduct(id: string) {
    //     const manager = getMongoManager();
    //     return manager.delete("products", id).then(() => {
    //         return true;
    //     }).catch(() => {
    //         return false;
    //     });
    // }
}
