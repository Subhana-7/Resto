import express from "express";
import { TYPES } from "../types";
import container from "../config/inversify.config";
import { IRestaurantController } from "../controller/interfaces/IRestaurantController";
import { validate } from "../middlewares/validate.middleware";
import { restaurantSchema } from "../validations/restaurant.validation";

const router = express.Router();
const controller = container.get<IRestaurantController>(
  TYPES.IRestaurantController,
);

router.post(
  "/create",
  validate(restaurantSchema),
  controller.addRestaurant.bind(controller),
);
router.put(
  "/update/:restaurantId",
  validate(restaurantSchema.partial()),
  controller.updateRestaurant.bind(controller),
);
router.delete(
  "/delete/:restaurantId",
  controller.deleteRestaurant.bind(controller),
);
router.get("/all", controller.listRestaurants.bind(controller));

export default router;
