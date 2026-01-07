import mongoose, { Schema, Document, Types } from "mongoose";

export interface IRestaurant extends Document {
  _id: Types.ObjectId;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
  };
  phone: number;
}

const RestaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    pincode: { type: Number, required: true },
  },
  phone: { type: Number, required: true },
});

export default mongoose.model<IRestaurant>("Restaurant", RestaurantSchema);
