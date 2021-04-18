import express from "express";
import {requestTime, logger, errorHandler} from "./middlewares.js";
// import mongodb from "mongodb";
// import { mongodbConnection } from "./db.js";
import serverRoutes from "./controller.js";
import cors from "cors";

const PORT = process.env.PORT ?? process.env.HOST_PORT;
const CORS_PORT = process.env.CORS_PORT;
const app = express();

app.use(cors());

app.get('/', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
})

app.listen(CORS_PORT, function () {
    console.log(`CORS-enabled web server listening on port ${CORS_PORT}`);
})

// async function main(){
//     const client = new mongodb.MongoClient(mongodbConnection.url, mongodbConnection.options);
//     try {
//         await client.connect();
//         await mongodb.listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
//
// main().catch(console.error);

app.use(errorHandler);
app.use(requestTime);
app.use(logger);

app.use(serverRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})