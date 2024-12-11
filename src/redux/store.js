import { configureStore } from "@reduxjs/toolkit";

// Importing Reducers
import pagesReducer from "./reducers/pagesReducer";

// PRODUCTION
export const server = "https://ecommerce-panel-backend.onrender.com/api/v1";

// DEVELOPMENT
// export const server = "http://localhost:3000/api/v1";

const store = configureStore({
  reducer: {
    pages: pagesReducer,
  },
});

export default store;
