import express from "express";
import {requestTime, logger, errorHandler} from "./middlewares.js";
import weatherRouters from "./routers/weather.routers.js";
import favouriteRouters from "./routers/favourite.routers.js";
import cors from "cors";
import mongodb from "mongodb";

const PORT = process.env.PORT ?? process.env.HOST_PORT;
const DB_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.ORIGIN || "*");
    next();
});

const client = new mongodb.MongoClient(DB_URL, { useUnifiedTopology: true });

async function mongoConnect() {
    try {
        await client.connect();

        const database = client.db('WeatherWeb');
        const movies = database.collection('FavouriteCities');
        const query = { title: 'Back to the Future' };
        const movie = await movies.findOne(query);
        // console.log(movie);
    } finally {
        await client.close();
    }
}
mongoConnect().catch(console.dir);

// mongoose.set("useCreateIndex", true);
//
// let db = mongoose.connect(process.env.MONGO_URL, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false})
//
// initSchema(db);

app.use(errorHandler);
app.use(requestTime);
app.use(logger);

app.use(weatherRouters);
app.use(favouriteRouters);

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`);
})
