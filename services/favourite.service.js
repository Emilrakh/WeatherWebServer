
import cityModel from "../model.js";

const favouriteCities = cityModel;

export async function addFavourite(cityName) {
    const city = await favouriteCities.findOne({cityName});
    if (!city) return await favouriteCities.create({cityName});
    // const city = await favouriteCities.findOne({cityName}).exec();
    // let citiesArray = [];
    // cities.forEach(info => citiesArray.push(info.cityName));
    // return citiesArray;
}

export async function deleteFavourite(name) {
    const cities = await favouriteCities.findOneAndDelete({cityName: name});
    return cities;
}

export function findFavourites() {
    return favouriteCities.find();
}
