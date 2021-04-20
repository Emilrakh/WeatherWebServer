import express from "express";
import {requestTime, logger, errorHandler} from "./middlewares.js";
import serverRoutes from "./routers.js";
import cors from "cors";

// import mongoose from "mongoose";
// import {initSchema} from "./db.js";

const PORT = process.env.PORT ?? process.env.HOST_PORT;
const CORS_PORT = process.env.CORS_PORT;
const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
});

app.listen(CORS_PORT, function () {
    console.log(`CORS-enabled web server listening on port ${CORS_PORT}`);
})

// mongoose.set("useCreateIndex", true);
//
// let db = mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
//
// initSchema(db);

app.use(errorHandler);
app.use(requestTime);
app.use(logger);

app.use(serverRoutes);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})
