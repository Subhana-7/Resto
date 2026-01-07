import { IRestaurant } from "../model/restaurant.model";
import { restaurantDto } from "../dto/restaurant.dto";

export const mapRestaurantToDto = (restaurant: IRestaurant): restaurantDto => ({
  id: restaurant._id.toString(),
  name: restaurant.name,
  address: {
    street: restaurant.address.street,
    city: restaurant.address.city,
    state: restaurant.address.state,
    country: restaurant.address.country,
    pincode: restaurant.address.pincode,
  },
  phone: restaurant.phone,
});
