import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity({ name: "news" })
export class NewsEntity {
    @ObjectIdColumn()
    public _id: ObjectID;
    @Column()
    public title: string;
    @Column()
    public content: string;
}
