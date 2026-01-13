import axios from "axios";
import { RESTAURANT } from "../constants/routes";

const API = import.meta.env.VITE_SERVER_URL;

export const getRestaurants = () => axios.get(`${API}${RESTAURANT.LIST}`);

export const createRestaurant = (data: any) =>
  axios.post(`${API}${RESTAURANT.CREATE}`, data);

export const updateRestaurant = (id: string, data: any) =>
  axios.put(`${API}${RESTAURANT.UPDATE}/${id}`, data);

export const deleteRestaurant = (id: string) =>
  axios.delete(`${API}${RESTAURANT.DELETE}/${id}`);
