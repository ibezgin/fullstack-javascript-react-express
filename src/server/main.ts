import express from "express";
import path from "path";
import { apiRouter } from "./routes/api-router";
import { pagesRouter } from "./routes/pages-router";
import { staticsRouter } from "./routes/statics-router";
import * as config from "./config";
import { getOrCreateConnection } from "./db/mongo-db-connection";

// eslint-disable-next-line no-console
console.log("*******************************************");
// eslint-disable-next-line no-console
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// eslint-disable-next-line no-console
console.log(`config: ${JSON.stringify(config, null, 2)}`);
// eslint-disable-next-line no-console
console.log("*******************************************");


(async () => {
    getOrCreateConnection();


})();

const app = express();
app.set("view engine", "ejs");

app.use("/assets", express.static(path.join(process.cwd(), "assets")));
app.use(apiRouter());
app.use(staticsRouter());
app.use(pagesRouter());

app.listen(config.SERVER_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${config.SERVER_PORT}!`);
});
