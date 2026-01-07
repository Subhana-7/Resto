import express from "express";
import { TYPES } from "../types";
import container from "../config/inversify.config";
import { IRestaurantController } from "../controller/interfaces/IRestaurantController";

const router = express.Router();
const controller = container.get<IRestaurantController>(TYPES.IRestaurantController);

router.post("/create", controller.addRestaurant.bind(controller));
router.put("/update/:id", controller.updateRestaurant.bind(controller));
router.delete("/delete/:id", controller.deleteRestaurant.bind(controller));
router.get("/all", controller.listRestaurants.bind(controller));

export default router;
