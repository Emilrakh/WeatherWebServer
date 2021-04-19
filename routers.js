import {Router} from "express";
import {
    getWeatherByCity,
    getWeatherByCoordinate,
    postFavouriteCity,
    deleteFavouriteCity,
    getFavouriteCity
} from "./controllers.js";

const router = Router();

router.get("/weather/city", getWeatherByCity);

router.get("/weather/coordinates", getWeatherByCoordinate);

router.post("/favourites", postFavouriteCity);

router.delete("/favourites", deleteFavouriteCity);

router.get("/favourites", getFavouriteCity);

export default router
