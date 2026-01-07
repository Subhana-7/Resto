export interface restaurantDto {
  id: string;
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
