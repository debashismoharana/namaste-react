import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-2 text-center">
      <h1 className="font-bold text-lg m-4">Cart</h1>
      <button
        className="px-2 py-1 rounded-lg bg-slate-400"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.map((item) => (
        <div key={item?.card?.info?.id}>
          <span>{item?.card?.info?.name}</span> - ₹
          <span>
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Cart;
