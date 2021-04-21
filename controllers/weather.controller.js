import {fetchWeatherByCoordinate, fetchWeatherByCity} from "../services/weather.service.js";

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

