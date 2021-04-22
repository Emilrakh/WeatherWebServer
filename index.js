import express from "express";
import {requestTime, logger, errorHandler} from "./middlewares.js";
import weatherRouters from "./routers/weather.routers.js";
import favouriteRouters from "./routers/favourite.routers.js";
import cors from "cors";
import mongoose from "mongoose";

const HOST_PORT = process.env.PORT || process.env.HOST_PORT;
const CORS_PORT = process.env.CORS_PORT;
const DB_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());

app.listen(CORS_PORT, function () {
    console.log(`CORS-enabled web server listening on port ${CORS_PORT}`)
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
});

async function mongoConnect() {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Successful connection to MongoDB')
    } catch (e) {
        console.log(e);
    }
}

mongoConnect().catch(console.dir);

app.use(errorHandler);
app.use(requestTime);
app.use(logger);

app.use(weatherRouters);
app.use(favouriteRouters);

app.listen(HOST_PORT, () => {
    console.log(`Server has been started on port ${HOST_PORT}`);
})
