import axios from "axios";

const API = "http://localhost:2000/api";

export const getRestaurants = () => axios.get(`${API}/all`);

export const createRestaurant = (data: any) =>
  axios.post(`${API}/create`, data);

export const updateRestaurant = (id: string, data: any) =>
  axios.put(`${API}/update/${id}`, data);

export const deleteRestaurant = (id: string) =>
  axios.delete(`${API}/delete/${id}`);
