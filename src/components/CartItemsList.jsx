import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartItemList = () => {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};

export default CartItemList;
