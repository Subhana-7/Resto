import { IRestaurant } from "../../model/restaurant.model";

export interface IRestaurantRepository {
  createRestaurant(data: Partial<IRestaurant>): Promise<IRestaurant | null>;
  updateRestaurant(
    restaurantId: string,
    data: Partial<IRestaurant>,
  ): Promise<IRestaurant | null>;
  deleteRestaurant(restaurantId: string): Promise<IRestaurant | null>;
  findAllRestaurants(search?: string): Promise<IRestaurant[] | null>;
}
