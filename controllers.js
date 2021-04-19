import {fetchWeatherByCoordinate, fetchWeatherByCity} from "./service.js";

export async function getWeatherByCity(req, res) {
    const cityName = req.query.cityName;
    const weatherData = await fetchWeatherByCity(cityName);

    if (weatherData) {
        res.status(200).send(weatherData);
    } else {
        res.status(404).send();
        console.log("Error get weather by City");
    }
}

export async function getWeatherByCoordinate(req, res) {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const weatherData = await fetchWeatherByCoordinate(lat, lon);

    if (weatherData) {
        res.status(200).send(weatherData);
    } else {
        res.status(404).send();
        console.log("Error get weather by Coordinate");
    }
}

export function getFavouriteCity(req, res) {
    let cities = req.find().exec();
    let citiesArray = [];

    cities.forEach(info => citiesArray.push(info.cityName));
    res.send({favouriteCities: citiesArray})
}

export async function postFavouriteCity(req, res) {
    const cityName = req.query.cityName;
    const weatherData = await fetchWeatherByCoordinate(cityName);

    if (weatherData !== null) {
        let exists = req.findOne({cityName: cityName.name}).exec();

        if (exists === null) {
            new req({cityName: cityName.name}).save();
            res.status(201).send(weatherData);
        } else {
            res.status(409).send();
        }
    } else {
        res.status(404).send();
        console.log("Error get weather by City");
    }
}

export function deleteFavouriteCity(req, res) {
    const cityName = req.query.cityName;
    const removeCity = req.findOneAndRemove({cityName: cityName});

    if (removeCity !== null) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
}