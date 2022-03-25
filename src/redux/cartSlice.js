import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
    totalCost: 0,
    totalQuantity: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.totalQuantity += action.payload.quantity;
      state.productList.push(action.payload);
      state.totalCost += action.payload.quantity * action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
