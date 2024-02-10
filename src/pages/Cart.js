import React from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  // Access the cart state from the Redux store
  const cart = useSelector((state) => state.cart.products);

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹ {item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
