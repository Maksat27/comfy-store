import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      console.log(action.payload.product.cartID);

      const item = state.cartItems.find(
        (item) => item.cartID === product.cartID
      );

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success(`${product.title} added to cart!`);
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((item) => item.cartID === cartID);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID
      );
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.error(`Item removed from cart!`);
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((item) => item.cartID === cartID);
      state.numItemsInCart += amount - item.amount;
      state.cartTotal += (amount - item.amount) * item.price;
      item.amount = amount;

      cartSlice.caseReducers.calculateTotals(state);

      toast.success(`Cart updated!`);
    },
    calculateTotals: (state) => {
      state.tax = parseFloat((state.cartTotal * 0.1).toFixed(2));
      state.orderTotal = parseFloat(
        (state.cartTotal + state.shipping + state.tax).toFixed(2)
      );
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
