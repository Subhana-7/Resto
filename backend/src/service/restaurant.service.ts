import { restaurantDto } from "../dto/restaurant.dto";
import { mapRestaurantToDto } from "../mapper/restaurant.mapper";
import { IRestaurantService } from "./interfaces/IRestaurantService";
import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { IRestaurantRepository } from "../repository/interfaces/IRestaurantRepository";
import { MESSAGES } from "../constants";

@injectable()
export class RestaurantService implements IRestaurantService {
  constructor(
    @inject(TYPES.IRestaurantRepository)
    private restaurantRepository: IRestaurantRepository
  ) {}

  async addRestaurant(data: restaurantDto): Promise<restaurantDto | null> {
    let restaurant = await this.restaurantRepository.createRestaurant(data);
    if (!restaurant) {
      throw new Error(MESSAGES.ERROR.CREATE_FAILED);
    }
    return mapRestaurantToDto(restaurant);
  }

  async updateRestaurant(
    restaurantId: string,
    data: Partial<restaurantDto>
  ): Promise<restaurantDto | null> {
    let updated = await this.restaurantRepository.updateRestaurant(
      restaurantId,
      data
    );
    console.log(updated)
    if (!updated) {
      throw new Error(MESSAGES.ERROR.UPDATE_FAILED);
    }
    return mapRestaurantToDto(updated);
  }

  async deleteRestaurant(restaurantId: string): Promise<void | null> {
    let res = await this.restaurantRepository.deleteRestaurant(restaurantId);
    if (!res) {
      throw new Error(MESSAGES.ERROR.DELETE_FAILED);
    }
  }

  async listAllRestaurant(): Promise<restaurantDto[] | null> {
    let res = await this.restaurantRepository.findAllRestaurants();
    if (!res) {
      throw new Error(MESSAGES.ERROR.LISTING_FAILED);
    }
    return res.map(mapRestaurantToDto);
  }
}
