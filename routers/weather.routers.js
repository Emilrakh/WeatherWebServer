import {Router} from "express";
import {
    getWeatherByCity,
    getWeatherByCoordinate
} from "../controllers/weather.controller.js";

const router = Router();

router.get("/weather/city", getWeatherByCity);

router.get("/weather/coordinates", getWeatherByCoordinate);

export default router
