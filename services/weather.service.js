import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const url = process.env.API_URL || secret.API_URL
const key = process.env.API_KEY || secret.API_KEY
const full_url = url + "&appid=" + key;

export function fetchWeatherByCity(cityName) {
    return fetch(full_url + "&q=" + cityName)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}

export function fetchWeatherByCoordinate(lat, lon) {
    return fetch(full_url + "&lat=" + lat + "&lon=" + lon)
        .then( (res) => {
            const data = res.json();
            return data;
        })
}
