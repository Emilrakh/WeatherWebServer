import dotenv from "dotenv"
import https from "https";

dotenv.config();

const url = process.env.API_URL + "&appid=" + process.env.API_KEY;

export function getWeatherByCity(req, res) {
    https.get(url + "&q=" + req.query.cityName, (response) => {
        if (response.statusCode === 200) {
            response.on("data", (data) => {
                const weatherData = JSON.parse(data);
                res.send(weatherData);
            })
        } else {
            console.log("Error get weather by City");
        }
    })
}

export function getWeatherByCoordinate(req, res) {
    https.get(url + "&lat=" + req.query.lat + "&lon=" + req.query.lon, (response) => {
        if (response.statusCode === 200) {
            response.on("data", (data) => {
                const weatherData = JSON.parse(data);
                res.send(weatherData);
            })
        } else {
            console.log("Error get weather by Coordinates");
        }
    })
}