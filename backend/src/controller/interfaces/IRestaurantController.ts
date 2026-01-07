import { Request, Response } from "express";

export interface IRestaurantController {
  addRestaurant(req: Request, res: Response): Promise<void>;
  updateRestaurant(req: Request, res: Response): Promise<void>;
  deleteRestaurant(req: Request, res: Response): Promise<void>;
  listRestaurants(req: Request, res: Response): Promise<void>;
}
