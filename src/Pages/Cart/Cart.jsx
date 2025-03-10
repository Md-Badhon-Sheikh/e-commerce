import React, { useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, handleInc, handleDec, setCart, handleRemove } = useOutletContext();
  const [promoCode, setPromoCode] = useState("");
  const [message, setMessage] = useState("");
  const [discount, setDiscount] = useState(0); // To store the discount percentage (10% or 0%)

  // Handle Promo Code application
  const applyPromoCode = () => {
    if (promoCode === "pwad") {
      setMessage("Promo code applied: 10% discount!");
      setDiscount(0.1); // 10% discount
    } else {
      setMessage("Invalid promo code.");
      setDiscount(0); // No discount
    }
  };

  // Calculate total price with promo code applied
  const getTotalPrice = () => {
    let total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    total *= (1 - discount); // Apply discount
    return total;
  };

  // Handle Checkout
  const handleCheckout = () => {
    // Clear cart after checkout
    setCart([]);
    setMessage("Order completed! Thank you for your purchase.");
  };

  return (
    <div className="mt-20 w-[90%] mx-auto">
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row shadow-md my-10 justify-center">
          <div className="w-full lg:w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-lg lg:text-2xl">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-lg lg:text-2xl">
                {cart.length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Total
              </h3>
            </div>
            {/* Cart Section */}
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img
                      className="h-24"
                      src={product.thumbnail} // Assuming product has image URL
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-semibold lg:font-bold text-sm">
                      {product.name}
                    </span>
                    <span className="text-red-500 text-xs">
                      {product.title}
                    </span>
                    <span className="text-red-500 text-xs">
                      ${product.price}
                    </span>
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => handleRemove(product.id)} >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  {/* Quantity controls */}
                  <button className="border px-2 py-1" onClick={() => handleDec(product.id)}>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                  <button className="px-2">{product.quantity}</button>
                  <button className="border px-2 py-1" onClick={() => handleInc(product.id)}>
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${product.price}
                </span>
                <span className="text-center w-1/5 font-semibold text-sm">
                  ${(product.price * product.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <NavLink
              to="/AllProducts"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </NavLink>
          </div>
          {/* Order Summary */}
          <div id="summary" className="w-full lg:w-1/4 px-8 py-10 bg-slate-200">
            <h1 className="font-semibold text-lg lg:text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items {cart.length}</span>
              <span className="font-semibold text-sm">
                ${(getTotalPrice().toFixed(2))}
              </span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Use pwad promo code 10% discount"
                className="p-2 text-sm w-full"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                
              />
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              onClick={applyPromoCode}
            >
              Apply
            </button>
            <div className="py-2 text-center text-sm text-green-600">{message}</div>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${(getTotalPrice() + 10).toFixed(2)}</span>
              </div>
              <button
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
