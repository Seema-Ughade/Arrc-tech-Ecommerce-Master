import { configureStore } from "@reduxjs/toolkit";

// Importing Reducers
import fontsReducer from "./reducers/fontsReducer"; // Importing fontsReducer
import sliderReducer from "./reducers/sliderReducer"
import categoriesReducer from './reducers/maincategoryReducer';

// PRODUCTION
export const server = "https://ecommerce-panel-backend.onrender.com";

// DEVELOPMENT
// export const server = "http://localhost:3000/api/v1";

const store = configureStore({
  reducer: {
    fonts: fontsReducer, // Adding fontsReducer to the store
    slider: sliderReducer,
        categories: categoriesReducer,

    

  },
});

export default store;


// for this  Logic: Handling asynchronous operations via Redux Thunks to make API calls using Axios. and Logic: Using Redux Toolkit's createSlice to handle state management for CRUD operations (Create, Read, Update, Delete) related to slider images.
