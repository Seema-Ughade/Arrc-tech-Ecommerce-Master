import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  compareItems: [],
  wishlistItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.cartItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.cartItems.push({ ...item, quantity: 1 }); // Add new item
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },

    addToCompare: (state, action) => {
      const item = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.compareItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.compareItems.push({ ...item, quantity: 1 }); // Add new item
      }
    },

    removeFromCompare: (state, action) => {
      state.cartItems = state.compareItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCompare: (state) => {
      state.compareItems = [];
    },

    addToWishlist: (state, action) => {
      const item = action.payload;

      // Check if the item already exists in the cart
      const existingItem = state.wishlistItems.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item exists
      } else {
        state.wishlistItems.push({ ...item, quantity: 1 }); // Add new item
      }
    },

    removeFromWishlist: (state, action) => {
      state.cartItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCartl,
  addToCompare,
  removeFromCompare,
  clearCompare,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;