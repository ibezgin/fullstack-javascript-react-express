import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity({ name: "products" })
export class ProductsEntity {
    @ObjectIdColumn()
    public _id: ObjectID;
    @Column()
    public title: string;
    @Column()
    public price: string;
    @Column()
    public imagePath: string;
    @Column()
    public count?: number;
    @Column()
    public isDisplayed?: number;
}
