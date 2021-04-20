import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const url = process.env.API_URL + "&appid=" + process.env.API_KEY;

export function fetchWeatherByCity(cityName) {
    return fetch(url + "&q=" + cityName)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}

export function fetchWeatherByCoordinate(lat, lon) {
    return fetch(url + "&lat=" + lat + "&lon=" + lon)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}
