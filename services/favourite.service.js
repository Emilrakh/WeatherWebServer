import cityModel from "../model.js";
import {fetchWeatherByCity} from "./weather.service.js";

const favouriteCities = cityModel;

export async function addFavourite(cityName) {
    let weatherData = await fetchWeatherByCity(cityName);

    if (weatherData.cod >= 200 && 300 > weatherData.cod) {
        let trueCityName = weatherData.name.replace(/[^a-z]/gi, '');
        const city = await favouriteCities.findOne({cityName:trueCityName});

           if (!city) {
            await favouriteCities.create({cityName:trueCityName});
            return weatherData;
        } else {
            throw new Error("This city already exists in your favorites");
        }
    } else {
        throw new Error("Not find such city");
    }
}

export async function deleteFavourite(name) {
    await favouriteCities.findOneAndDelete({cityName: name}, (err) => {
        if (err) {
            throw new Error("This city already none in your favorites");
        }
    });
}

export async function getFavourites() {
    let citiesArray = [];
    let cities = await favouriteCities.find();
    if (!cities) {
        throw new Error("None cities in your favourites");
    } else {
        cities.forEach((res) => {citiesArray.push(res.cityName);});
        return citiesArray;
    }
}
