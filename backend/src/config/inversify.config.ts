import { Container } from "inversify";
import { TYPES } from "../types";

import { IRestaurantController } from "../controller/interfaces/IRestaurantController";
import { RestaurantController } from "../controller/restaurant.controller";

import { IRestaurantService } from "../service/interfaces/IRestaurantService";
import { RestaurantService } from "../service/restaurant.service";

import { IRestaurantRepository } from "../repository/interfaces/IRestaurantRepository";
import { RestaurantRepository } from "../repository/restaurant.repository";

const container = new Container();

container.bind<IRestaurantController>(TYPES.IRestaurantController).to(RestaurantController);

container.bind<IRestaurantService>(TYPES.IRestaurantService).to(RestaurantService);

container.bind<IRestaurantRepository>(TYPES.IRestaurantRepository).to(RestaurantRepository);

export default container;