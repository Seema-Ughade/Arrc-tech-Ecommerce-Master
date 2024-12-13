import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  sliders: [],
  filteredSliders: [],
  slider: null,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 10,
  message: null,
  error: null,
};

const sliderSlice = createSlice({
  name: 'sliders',
  initialState,
  reducers: {
    getAllSlidersRequest: (state) => {
      state.loading = true;
    },
    getAllSlidersSuccess: (state, action) => {
      state.loading = false;
      state.sliders = action.payload;
      state.filteredSliders = action.payload; // Initially set filteredSliders to all sliders
    },
    getAllSlidersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createSliderRequest: (state) => {
      state.loading = true;
    },
    createSliderSuccess: (state, action) => {
      state.loading = false;
      state.slider = action.payload.newSlider;
      state.message = action.payload.message;
      state.sliders = [...state.sliders, action.payload.newSlider];
      state.filteredSliders = state.sliders;
    },
    createSliderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateSliderRequest: (state) => {
      state.loading = true;
    },
    updateSliderSuccess: (state, action) => {
      state.loading = false;
      state.sliders = state.sliders.map((slider) =>
        slider.id === action.payload.id ? action.payload : slider
      );
      state.filteredSliders = state.sliders;
      state.message = action.payload.message;
    },
    updateSliderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteSliderRequest: (state) => {
      state.loading = true;
    },
    deleteSliderSuccess: (state, action) => {
      state.loading = false;
      state.sliders = state.sliders.filter((slider) => slider.id !== action.payload);
      state.filteredSliders = state.filteredSliders.filter((slider) => slider.id !== action.payload);
      state.message = action.payload.message;
    },
    deleteSliderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    filterSliders: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filtered = state.sliders.filter((slider) =>
        slider.name.toLowerCase().includes(searchTerm)
      );
      state.filteredSliders = filtered;
      state.searchTerm = action.payload;
      state.currentPage = 1; // Reset to page 1 when filter changes
    },

    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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
  getAllSlidersRequest,
  getAllSlidersSuccess,
  getAllSlidersFail,
  createSliderRequest,
  createSliderSuccess,
  createSliderFail,
  updateSliderRequest,
  updateSliderSuccess,
  updateSliderFail,
  deleteSliderRequest,
  deleteSliderSuccess,
  deleteSliderFail,
  filterSliders,
  setCurrentPage,
  clearError,
  clearMessage,
} = sliderSlice.actions;

export default sliderSlice.reducer;
