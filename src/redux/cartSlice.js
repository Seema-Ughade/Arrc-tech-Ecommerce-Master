// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   compareItems: [],
//   wishlistItems: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = action.payload;

//       // Check if the item already exists in the cart
//       const existingItem = state.cartItems.find((i) => i.id === item.id);

//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item exists
//       } else {
//         state.cartItems.push({ ...item, quantity: 1 }); // Add new item
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.cartItems = state.cartItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//     clearCart: (state) => {
//       state.cartItems = [];
//     },

//     addToCompare: (state, action) => {
//       const item = action.payload;

//       // Check if the item already exists in the cart
//       const existingItem = state.compareItems.find((i) => i.id === item.id);

//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item exists
//       } else {
//         state.compareItems.push({ ...item, quantity: 1 }); // Add new item
//       }
//     },

//     removeFromCompare: (state, action) => {
//       state.cartItems = state.compareItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     clearCompare: (state) => {
//       state.compareItems = [];
//     },

//     addToWishlist: (state, action) => {
//       const item = action.payload;

//       // Check if the item already exists in the cart
//       const existingItem = state.wishlistItems.find((i) => i.id === item.id);

//       if (existingItem) {
//         existingItem.quantity += 1; // Increment quantity if item exists
//       } else {
//         state.wishlistItems.push({ ...item, quantity: 1 }); // Add new item
//       }
//     },

//     removeFromWishlist: (state, action) => {
//       state.cartItems = state.wishlistItems.filter(
//         (item) => item.id !== action.payload
//       );
//     },

//     clearWishlist: (state) => {
//       state.wishlistItems = [];
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   clearCartl,
//   addToCompare,
//   removeFromCompare,
//   clearCompare,
//   addToWishlist,
//   removeFromWishlist,
//   clearWishlist,
// } = cartSlice.actions;

// export default cartSlice.reducer;


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
      const existingItem = state.cartItems.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    updateCartItemQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    addToCompare: (state, action) => {
      const item = action.payload;
      const existingItem = state.compareItems.find((i) => i._id === item._id);

      if (!existingItem) {
        state.compareItems.push(item);
      }
    },
    removeFromCompare: (state, action) => {
      state.compareItems = state.compareItems.filter(
        (item) => item._id !== action.payload
      );
    },
    clearCompare: (state) => {
      state.compareItems = [];
    },
    addToWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.wishlistItems.find((i) => i._id === item._id);

      if (!existingItem) {
        state.wishlistItems.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item._id !== action.payload
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
  updateCartItemQuantity,
  clearCart,
  addToCompare,
  removeFromCompare,
  clearCompare,
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = cartSlice.actions;

export default cartSlice.reducer;

