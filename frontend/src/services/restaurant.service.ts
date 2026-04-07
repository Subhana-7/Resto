import axios from "axios";

const API = import.meta.env.VITE_SERVER_URL;

export const getRestaurants = (search?: string) =>
  axios.get(`${API}`, {
    params: { search },
  });

export const createRestaurant = (data: any) =>
  axios.post(`${API}`, data);

export const updateRestaurant = (restaurantId: string, data: any) =>
  axios.put(`${API}/${restaurantId}`, data);

export const deleteRestaurant = (restaurantId: string) =>
  axios.delete(`${API}/${restaurantId}`);
