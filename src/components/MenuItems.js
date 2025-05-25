import { IMG_CDN_URL } from "../utils/constants";

const MenuItems = ({ items }) => {
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
            <div className="w-2/12">
              <img className="rounded-md" src={IMG_CDN_URL + imageId} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
