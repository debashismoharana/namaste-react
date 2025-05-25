import { useState } from "react";
import MenuItems from "./MenuItems";

const MenuCategory = ({ title, menuItems }) => {
  const [showItems, setShowItems] = useState(false);
  const chevron = showItems ? "▲" : "▼";

  const toggleMenu = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="m-2 w-8/12">
      <div className="flex justify-between cursor-pointer" onClick={toggleMenu}>
        <span className="text-lg font-bold my-2">{title}</span>
        <span>{chevron}</span>
      </div>
      {showItems && <MenuItems items={menuItems} />}
    </div>
  );
};

export default MenuCategory;
