import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  pages: null,
  page: null,
  message: null,
  error: null,
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    getAllPagesRequest: (state) => {
      state.loading = true;
    },
    getAllPagesSuccess: (state, action) => {
      state.loading = false;
      state.pages = action.payload;
    },
    getAllPagesFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createPageRequest: (state) => {
      state.loading = true;
    },
    createPageSuccess: (state, action) => {
      state.loading = false;
      state.page = action.payload.newPage;
      state.message = action.payload.message;
    },
    createPageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updatePageRequest: (state) => {
      state.loading = true;
    },
    updatePageSuccess: (state, action) => {
      state.loading = false;
      state.page = action.payload.page;
      state.message = action.payload.message;
    },
    updatePageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deletePageRequest: (state) => {
      state.loading = true;
    },
    deletePageSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deletePageFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
});

export const {
  getAllPagesRequest,
  getAllPagesSuccess,
  getAllPagesFail,
  deletePageRequest,
  deletePageSuccess,
  deletePageFail,
  createPageRequest,
  createPageSuccess,
  createPageFail,
  updatePageRequest,
  updatePageSuccess,
  updatePageFail,

  clearError,
  clearMessage,
} = pageSlice.actions;
export default pageSlice.reducer;







// I want to create a Redux action and reducer for managing [component name, e.g., products, users, categories, etc.]. The component needs the following actions:

// Create - To create a new [component].
// Update - To update an existing [component].
// Delete - To delete a [component].
// Get All - To fetch all [components].
// Error Handling - For catching any errors and displaying error messages.
// The state should include loading, success message, error, and data for the [component].

// The action should handle asynchronous API calls (using axios or any other tool) for these operations.
// The reducer should include actions for the request, success, failure, and resetting error/message states.
// Also, use Redux Toolkit (createSlice) to simplify the reducer setup. The component state should have:

// loading: Boolean to track loading state.
// data: Stores the list of [components].
// message: Stores success messages.
// error: Stores error messages.
// Also, include actions for clearing errors and messages."