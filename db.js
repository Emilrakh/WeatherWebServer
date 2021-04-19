import mongoose from "mongoose";

export function initSchema(mongoose) {
    let favouriteCity = createSchema(mongoose);
}

function createSchema(mongoose) {
    const favouriteCity = new mongoose.Schema({cityName: {type: "string", unique: true}});
    return mongoose.model("cities", favouriteCity);
}