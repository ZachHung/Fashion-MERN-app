import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let foundIndex = state.products.findIndex(
        (item) =>
          item.size === action.payload.size &&
          item.color === action.payload.color
      );
      if (foundIndex >= 0) {
        state.products[foundIndex].quantity += 1;
      } else {
        state.products.push(action.payload);
      }
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    resetCart: (state, action) => (state = initialState),
  },
});
export const { addProduct, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
