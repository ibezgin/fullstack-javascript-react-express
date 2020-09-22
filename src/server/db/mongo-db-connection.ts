import { createConnection } from "typeorm";
import { UserEntity } from "./entities/users";
import { NewsEntity } from "./entities/news";
import { ProductsEntity } from "./entities/products";

// const connectionManager = new ConnectionManager();

let connection: ReturnType<typeof createConnection> | undefined;

export const getOrCreateConnection = () => {
    if (!connection) {
        connection = createConnection({
            type: "mongodb",
            host: "localhost",
            port: 27017,
            database: "fullstack",
            useNewUrlParser: true,
            reconnectTries: Number.MAX_VALUE,
            entities: [
                UserEntity,
                NewsEntity,
                ProductsEntity,
            ],
            synchronize: true,
        });
    }
    return connection;
};
