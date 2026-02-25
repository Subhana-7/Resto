import { useState } from "react";
import { createRestaurant } from "../services/restaurant.service";

interface Props {
  onClose: () => void;
  onSuccess: () => void;
}

const AddRestaurantModal = ({ onClose, onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = async () => {
    try {
      setErrors({}); // reset old errors

      await createRestaurant({
        name,
        address: { street, city, state, country, pincode },
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
          <h2 className="text-lg font-semibold">Add Restaurant</h2>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="space-y-3">
          <input
            className={`w-full border rounded px-3 py-2 ${
              errors?.name ? "border-red-500" : ""
            }`}
            placeholder="Name *"
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
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
