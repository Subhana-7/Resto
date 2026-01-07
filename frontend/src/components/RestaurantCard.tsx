import { useState } from "react";
import { deleteRestaurant } from "../services/restaurant.service";
import EditRestaurantModal from "../components/EditRestaurant";

const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
];

const RestaurantCard = ({ restaurant, refresh }: any) => {
  const [openEdit, setOpenEdit] = useState(false);
  const img = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      <div className="bg-white rounded-lg shadow flex overflow-hidden">
        <img src={img} className="w-32 object-cover" />

        <div className="p-4 flex-1">
          <h3 className="font-semibold">{restaurant.name}</h3>
          <p className="text-sm text-gray-600">
            {restaurant.address.street}, {restaurant.address.city}
          </p>
          <p className="text-sm text-gray-600">{restaurant.phone}</p>
        </div>

        <div className="flex items-center gap-2 pr-4">
          <button
            onClick={() => setOpenEdit(true)}
            className="px-3 py-1 border rounded text-sm"
          >
            Edit
          </button>

          <button
            onClick={async () => {
              await deleteRestaurant(restaurant.id);
              refresh();
            }}
            className="px-3 py-1 border rounded text-sm text-red-600"
          >
            Delete
          </button>
        </div>
      </div>

      {openEdit && (
        <EditRestaurantModal
          restaurant={restaurant}
          onClose={() => setOpenEdit(false)}
          onSuccess={refresh}
        />
      )}
    </>
  );
};

export default RestaurantCard;
