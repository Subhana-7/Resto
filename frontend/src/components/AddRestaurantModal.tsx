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

  const handleSubmit = async () => {
    await createRestaurant({
      name,
      address: { street, city, state, country, pincode: Number(pincode) },
      phone: Number(phone),
    });
    onSuccess();
    onClose();
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
            className="w-full border rounded px-3 py-2"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="State"
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Pincode"
            onChange={(e) => setPincode(e.target.value)}
          />

          <input
            className="w-full border rounded px-3 py-2"
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
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
