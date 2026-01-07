import { restaurantDto } from "../../dto/restaurant.dto";


export interface IRestaurantService {
   addRestaurant(data: restaurantDto): Promise<restaurantDto | null>;
   updateRestaurant(
    restaurantId: string,
    data: Partial<restaurantDto>
  ): Promise<restaurantDto | null>;
  deleteRestaurant(restaurantId: string): Promise<void | null> ;
  listAllRestaurant(): Promise<restaurantDto[] | null>;
}