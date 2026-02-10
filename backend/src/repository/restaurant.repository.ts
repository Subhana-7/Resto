import restaurantModel, { IRestaurant } from "../model/restaurant.model";
import { IRestaurantRepository } from "./interfaces/IRestaurantRepository";
import { injectable } from "inversify";

@injectable()
export class RestaurantRepository implements IRestaurantRepository {
  constructor() {}

  async createRestaurant(
    data: Partial<IRestaurant>,
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
    data: Partial<IRestaurant>,
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

  async findAllRestaurants(search?: string): Promise<IRestaurant[] | null> {
    try {
      const query: any = {};

      if (search) {
        query.$or = [
          { name: { $regex: search, $options: "i" } },
          { cuisine: { $regex: search, $options: "i" } },
          { location: { $regex: search, $options: "i" } },
        ];
      }

      return restaurantModel.find(query);
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }
}
