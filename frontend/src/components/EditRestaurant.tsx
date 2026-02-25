import { useState } from "react";
import { updateRestaurant } from "../services/restaurant.service";

interface Props {
  restaurant: any;
  onClose: () => void;
  onSuccess: () => void;
}

const EditRestaurantModal = ({ restaurant, onClose, onSuccess }: Props) => {
  const [name, setName] = useState(restaurant.name);
  const [street, setStreet] = useState(restaurant.address.street);
  const [city, setCity] = useState(restaurant.address.city);
  const [state, setState] = useState(restaurant.address.state);
  const [country, setCountry] = useState(restaurant.address.country);
  const [pincode, setPincode] = useState(restaurant.address.pincode);
  const [phone, setPhone] = useState(restaurant.phone);
  const [errors, setErrors] = useState<any>({});

  const handleUpdate = async () => {
    try {
      setErrors({});

      await updateRestaurant(restaurant.id, {
        name,
        address: {
          street,
          city,
          state,
          country,
          pincode,
        },
        phone,
      });

      onSuccess();
      onClose();
    } catch (error: any) {
      const backendErrors = error.response?.data?.errors;

      if (backendErrors) {
        setErrors(backendErrors);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Edit Restaurant</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-4">
          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.name ? "border-red-500" : ""
            }`}
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {errors?.name?._errors && (
            <p className="text-red-500 text-sm">{errors.name._errors[0]}</p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.address?.street ? "border-red-500" : ""
            }`}
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          {errors?.address?.street?._errors && (
            <p className="text-red-500 text-sm">
              {errors.address.street._errors[0]}
            </p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.address?.city ? "border-red-500" : ""
            }`}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          {errors?.address?.city?._errors && (
            <p className="text-red-500 text-sm">
              {errors.address.city._errors[0]}
            </p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.address?.state ? "border-red-500" : ""
            }`}
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          {errors?.address?.state?._errors && (
            <p className="text-red-500 text-sm">
              {errors.address.state._errors[0]}
            </p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.address?.country ? "border-red-500" : ""
            }`}
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          {errors?.address?.country?._errors && (
            <p className="text-red-500 text-sm">
              {errors.address.country._errors[0]}
            </p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.address?.pincode ? "border-red-500" : ""
            }`}
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          {errors?.address?.pincode?._errors && (
            <p className="text-red-500 text-sm">
              {errors.address.pincode._errors[0]}
            </p>
          )}

          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.phone ? "border-red-500" : ""
            }`}
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {errors?.phone?._errors && (
            <p className="text-red-500 text-sm">{errors.phone._errors[0]}</p>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRestaurantModal;
