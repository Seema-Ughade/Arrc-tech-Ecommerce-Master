import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  deal: null,
  message: null,
  error: null,
};

const dealSlice = createSlice({
  name: "deal",
  initialState,
  reducers: {
    getDealRequest: (state) => {
      state.loading = true;
    },
    getDealSuccess: (state, action) => {
      state.loading = false;
      state.deal = action.payload;
    },
    getDealFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createDealRequest: (state) => {
      state.loading = true;
    },
    createDealSuccess: (state, action) => {
      state.loading = false;
      state.deal = action.payload.deal;
      state.message = action.payload.message;
    },
    createDealFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateDealRequest: (state) => {
      state.loading = true;
    },
    updateDealSuccess: (state, action) => {
      state.loading = false;
      state.deal = action.payload.deal;
      state.message = action.payload.message;
    },
    updateDealFail: (state, action) => {
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
  getDealRequest,
  getDealSuccess,
  getDealFail,
  createDealRequest,
  createDealSuccess,
  createDealFail,
  updateDealRequest,
  updateDealSuccess,
  updateDealFail,
  clearError,
  clearMessage,
} = dealSlice.actions;

export default dealSlice.reducer;

