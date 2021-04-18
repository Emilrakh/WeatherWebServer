import {Router} from "express"
import {
    getWeatherByCity,
    getWeatherByCoordinate
} from "./service.js"

const router = Router();

router.get("/weather/city", getWeatherByCity);

router.get("/weather/coordinates", getWeatherByCoordinate);

// router.post("/favourites", );
//
// router.delete("/favourites", );
//
// router.get("/favourites", );

export default router
