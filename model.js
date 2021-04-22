
import pkg from 'mongoose';
const {Schema, model} = pkg;

const favouriteCities = new Schema({
    cityName: {
        type: "string",
        required: true,
        unique: false,
    }});
const cityModel =  model("favouriteCities", favouriteCities);

export default cityModel
