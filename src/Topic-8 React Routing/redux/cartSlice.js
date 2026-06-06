import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (element) => element.id == action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (element) => element.id == action.payload.id,
      );

      if (!existingItem) return;

      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (element) => element.id !== action.payload.id,
        );
      }
    },
    deleteItem: (state,action) => {

      if(!action.payload?.id) return

      state.items = state.items.filter(
          (element) => element.id !== action.payload.id,
        );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem,deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
