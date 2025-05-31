import MenuItems from "./MenuItems";

const MenuCategory = ({
  title,
  menuItems,
  showItems,
  setShowAccordionIndex,
}) => {
  //   const chevron = showItems ? "▲" : "▼";

  const toggleMenu = () => {
    setShowAccordionIndex();
  };

  return (
    <div className="m-2 w-8/12">
      <div className="flex justify-between cursor-pointer" onClick={toggleMenu}>
        <span className="text-lg font-bold my-2">{title}</span>
        <span>▼</span>
      </div>
      {showItems && <MenuItems items={menuItems} />}
    </div>
  );
};

export default MenuCategory;
