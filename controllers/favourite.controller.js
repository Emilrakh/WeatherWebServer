import {fetchWeatherByCoordinate} from "../service.js";

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

export async function deleteFavouriteCity(req, res) {
    const cityName = req.query.cityName;
    const removeCity = req.findOneAndRemove({cityName: cityName});

    if (removeCity !== null) {
        res.status(204).send();
    } else {
        res.status(404).send();
    }
}
