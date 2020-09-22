import bodyParser from "body-parser";
import { Router } from "express";
import { getUserById } from "../db";
import { getRepository, getMongoManager } from "typeorm";
import { UserEntity } from "../db/entities/users";


export function apiRouter() {
    const router = Router();


    router.use(bodyParser.json());

    router.get("/api/users", async (req, res) => {
        try {
            const users = await getRepository(UserEntity).find();
            res.json(users);

        } catch (ee) {
            // asdasd
        }
    });

    router.post("/api/users", async (req, res) => {
        const user = new UserEntity("example", "example", "example");
        const manager = getMongoManager();
        manager.save(user);
        res.send("ok");
    });

    router.get("/api/user/:userId", (req, res) => {
        const userId = req.params.userId;
        res.json(getUserById(userId));
    });

    router.post("/api/set-user", (req, res) => {
        res.send("ok");
    });

    return router;
}
