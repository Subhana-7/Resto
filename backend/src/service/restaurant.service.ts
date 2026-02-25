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
    private _restaurantRepository: IRestaurantRepository,
  ) {}

  async addRestaurant(data: restaurantDto): Promise<restaurantDto | null> {
    let restaurant = await this._restaurantRepository.createRestaurant(data);
    if (!restaurant) {
      throw new Error(MESSAGES.ERROR.CREATE_FAILED);
    }
    return mapRestaurantToDto(restaurant);
  }

  async updateRestaurant(
    restaurantId: string,
    data: Partial<restaurantDto>,
  ): Promise<restaurantDto | null> {
    let updated = await this._restaurantRepository.updateRestaurant(
      restaurantId,
      data,
    );
    if (!updated) {
      throw new Error(MESSAGES.ERROR.UPDATE_FAILED);
    }
    return mapRestaurantToDto(updated);
  }

  async deleteRestaurant(restaurantId: string): Promise<void | null> {
    let res = await this._restaurantRepository.deleteRestaurant(restaurantId);
    if (!res) {
      throw new Error(MESSAGES.ERROR.DELETE_FAILED);
    }
  }

  async listAllRestaurant(search?: string): Promise<restaurantDto[] | null> {
    let res = await this._restaurantRepository.findAllRestaurants(search);
    if (!res) {
      throw new Error(MESSAGES.ERROR.LISTING_FAILED);
    }
    return res.map(mapRestaurantToDto);
  }
}
