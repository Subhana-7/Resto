import { z } from "zod";

export const restaurantSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name too long"),

  address: z.object({
    street: z.string().min(3, "Street required"),
    city: z.string().min(2, "City required"),
    state: z.string().min(2, "State required"),
    country: z.string().min(2, "Country required"),
    pincode: z.coerce
      .number()
      .int()
      .min(100000, "Pincode must be 6 digits")
      .max(999999, "Pincode must be 6 digits"),
  }),

  phone: z.coerce
    .number()
    .int()
    .min(1000000000, "Phone must be 10 digits")
    .max(9999999999, "Phone must be 10 digits"),
});
