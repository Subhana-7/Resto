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
    private resturantService: IRestaurantService,
  ) {}

  addRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = await this.resturantService.addRestaurant(req.body);
      res.status(STATUS_CODES.CREATED).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.CREATE_ERROR,
      });
    }
  };

  updateRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const data = await this.resturantService.updateRestaurant(id, req.body);
      res.status(STATUS_CODES.OK).json(data);
    } catch (error) {
      res.status(STATUS_CODES.BAD_REQUEST).json({
        message: MESSAGES.ERROR.UPDATE_ERROR,
      });
    }
  };

  deleteRestaurant = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      await this.resturantService.deleteRestaurant(id);
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
      const data = await this.resturantService.listAllRestaurant(
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
