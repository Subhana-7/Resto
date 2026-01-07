import { useEffect, useState } from "react";
import { getRestaurants } from "../services/restaurant.service";
import AddRestaurantModal from "../components/AddRestaurantModal";
import RestaurantCard from "../components/RestaurantCard";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [open, setOpen] = useState(false);

  const load = async () => {
    const res = await getRestaurants();
    setRestaurants(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-semibold">Restaurant Listing</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Restaurant
        </button>
      </div>

      <div className="space-y-4">
        {restaurants.map((r: any) => (
          <RestaurantCard
            key={r._id}
            restaurant={r}
            refresh={load}
          />
        ))}
      </div>

      {open && (
        <AddRestaurantModal
          onClose={() => setOpen(false)}
          onSuccess={load}
        />
      )}
    </div>
  );
};

export default Restaurants;
