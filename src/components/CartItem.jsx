import React from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, editItem } from "../features/cart/CartSlice";

const CartItem = ({ cartItem }) => {
  const { cartID, title, image, price, amount, company, color } = cartItem;

  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(
      editItem({
        cartID,
        amount: parseInt(e.target.value),
      })
    );
  };

  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6  last:border-b-0"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      {/* Info */}
      <div className="sm:ml-16 sm:w-40">
        {/* Title */}
        <h3 className="capitalize font-medium">{title}</h3>
        {/* Company */}
        <h4 className="mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* Color */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: color }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/* Amount */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-base select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* Remove */}
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          remove
        </button>
      </div>
      {/* Price */}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
