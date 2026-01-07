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

  const handleUpdate = async () => {
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
            className="w-full border rounded px-3 py-2"
            placeholder="Restaurant Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
