import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../utils/constants";

const MenuItems = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, description, price, imageId } = item?.card?.info;
        return (
          <div
            key={id}
            className="border-b-2 border-gray-100 p-2 flex justify-between"
          >
            <div className="w-9/12">
              <div className="font-semibold">{name}</div>
              <div>₹{price / 100}</div>
              <p className="text-md">{description}</p>
            </div>
            {imageId && (
              <div className="w-2/12 text-center">
                <img className="rounded-md" src={IMG_CDN_URL + imageId} />
                <button
                  className="bg-blue-800 text-white rounded-lg px-2 py-1 absolute mx-10 -my-8"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
