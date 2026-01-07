import restaurantModel, { IRestaurant } from "../model/restaurant.model";
import { IRestaurantRepository } from "./interfaces/IRestaurantRepository";
import { injectable } from "inversify";

@injectable()
export class RestaurantRepository implements IRestaurantRepository {
  constructor() {}

  async createRestaurant(
    data: Partial<IRestaurant>
  ): Promise<IRestaurant | null> {
    try {
      return restaurantModel.create(data);
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  async updateRestaurant(
    restaurantId: string,
    data: Partial<IRestaurant>
  ): Promise<IRestaurant | null> {
    try {
      return restaurantModel.findByIdAndUpdate(restaurantId, data, {
        new: true,
      });
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  async deleteRestaurant(restaurantId: string): Promise<IRestaurant | null> {
    try {
      return restaurantModel.findByIdAndDelete(restaurantId);
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  async findAllRestaurants(): Promise<IRestaurant[] | null> {
    try {
      return restaurantModel.find();
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }
}
