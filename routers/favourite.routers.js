import {Router} from "express";
import {
    postFavouriteCity,
    deleteFavouriteCity,
    getFavouriteCity
} from "../controllers/favourite.controller.js";

const router = Router();

router.post("/favourites", postFavouriteCity);

router.delete("/favourites", deleteFavouriteCity);

router.get("/favourites", getFavouriteCity);

export default router