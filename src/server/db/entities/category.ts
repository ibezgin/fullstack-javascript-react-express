import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity({ name: "category" })
export class CategoryEntity {
    @ObjectIdColumn()
    public _id: ObjectID;
    @Column()
    public title: string;
    @Column()
    public imagePath?: string;
}
