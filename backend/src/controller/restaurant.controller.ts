import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { IRestaurantController } from "./interfaces/IRestaurantController";
import { IRestaurantService } from "../service/interfaces/IRestaurantService";
import { TYPES } from "../types";
import { STATUS_CODES, MESSAGES } from "../constants";

@injectable()
export class RestaurantController implements IRestaurantController {
  constructor(
    @inject(TYPES.IRestaurantService)
    private _resturantService: IRestaurantService,
  ) {}

  addRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this._resturantService.addRestaurant(req.body);
      res.status(STATUS_CODES.CREATED).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.CREATE_ERROR,
      });
    }
  };

  updateRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const { restaurantId } = req.params;
      const data = await this._resturantService.updateRestaurant(
        restaurantId,
        req.body,
      );
      res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.UPDATE_ERROR,
      });
    }
  };

  deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const { restaurantId } = req.params;
      await this._resturantService.deleteRestaurant(restaurantId);
      res.status(STATUS_CODES.OK).json({
        message: MESSAGES.SUCCESS.DELETE_SUCCESS,
      });
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.DELETE_ERROR,
      });
    }
  };

  listRestaurants = async (req: Request, res: Response): Promise<void> => {
    try {
      const { search } = req.query;
      const data = await this._resturantService.listAllRestaurant(
        search?.toString(),
      );

      res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.LISTING_ERROR,
      });
    }
  };
}
