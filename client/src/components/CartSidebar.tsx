import { ShoppingBagIcon, XIcon } from "lucide-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartSidebar = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const { items, cartTotal, cartCount, isCartOpen, setIsCartOpen }=useContext(CartContext);

  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const deliveryFee = cartTotal > 0 ? 20 : 1.98;
  const grandTotal = cartTotal + deliveryFee;
  return (
    <>
      {/* {overlay} */}
      <div onClick={() => setIsCartOpen(false)} className="fixed inset-0 bg-black/40 z-50 transition-opacity" />
      {/* {sidebar} */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* {header} */}
        <div className="flex items-center gap-2">
          <ShoppingBagIcon className="size-5" />
          <h2 className="text-lg font-medium">Your Cart</h2>
          <span className="px-2 py-0.5 text-xs font-semibold bg-app-cream rounded-full">
            {items.length} items
          </span>
        </div>
        <button onClick={() => setIsCartOpen(false)} className="p-2 rounded-xl hover:bg-app-cream transition-colors">
          <XIcon className="size-5" />
        </button>
      </div>
    </>
  );
};

export default CartSidebar;
