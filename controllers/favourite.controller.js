import {fetchWeatherByCity} from "../services/weather.service.js";
import {addFavourite, deleteFavourite, findFavourites} from "../services/favourite.service.js";

export async function getFavouriteCity(req, res) {
    let cities = await findFavourites();
    res.send(cities);
}

export async function postFavouriteCity(req, res) {
    const cityName = req.query.cityName;
    const weatherData = await fetchWeatherByCity(cityName);

    if (weatherData !== null) {
        addFavourite(cityName);
        res.status(201).send();
    } else {
        res.status(404).send();
        console.log("Error get weather by City");
    }
}

export async function deleteFavouriteCity(req, res) {
    const cityName = req.query.cityName;
    const removeCity = deleteFavourite(cityName);

    if (removeCity !== null) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
}
