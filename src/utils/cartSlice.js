import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item?.card?.info?.id === newItem?.card?.info?.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, increase quantity
        state.items[existingItemIndex].quantity =
          (state.items[existingItemIndex].quantity || 1) + 1;
      } else {
        // New item, add with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item?.card?.info?.id === itemId
      );

      if (existingItemIndex !== -1) {
        if (state.items[existingItemIndex].quantity > 1) {
          // Decrease quantity
          state.items[existingItemIndex].quantity -= 1;
        } else {
          // Remove item completely
          state.items.splice(existingItemIndex, 1);
        }
      }
    },
    removeItemCompletely: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== itemId
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeItemCompletely, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
