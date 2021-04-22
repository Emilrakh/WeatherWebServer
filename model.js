
import pkg from 'mongoose';
const {Schema, model} = pkg;

const favouriteCities = new Schema({cityName: {type: "string"}});
const cityModel =  model("favouriteCities", favouriteCities);

export default cityModel
