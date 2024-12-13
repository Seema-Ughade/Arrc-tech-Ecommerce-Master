import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  fonts: [],
  filteredFonts: [],
  font: null,
  searchTerm: '',
  currentPage: 1,
  itemsPerPage: 10,
  message: null,
  error: null,
};

const fontSlice = createSlice({
  name: "fonts",
  initialState,
  reducers: {
    getAllFontsRequest: (state) => {
      state.loading = true;
    },
    getAllFontsSuccess: (state, action) => {
      state.loading = false;
      state.fonts = action.payload;
      state.filteredFonts = action.payload; // Initially set filteredFonts to all fonts
    },
    getAllFontsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    createFontRequest: (state) => {
      state.loading = true;
    },
    createFontSuccess: (state, action) => {
      state.loading = false;
      state.font = action.payload.newFont;
      state.message = action.payload.message;
    },
    createFontFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    updateFontRequest: (state) => {
      state.loading = true;
    },
    updateFontSuccess: (state, action) => {
      state.loading = false;
      state.fonts = state.fonts.map((font) =>
        font._id === action.payload._id ? action.payload : font
      );
      state.filteredFonts = state.fonts;
      state.message = action.payload.message;
    },
    updateFontFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteFontRequest: (state) => {
      state.loading = true;
    },
    deleteFontSuccess: (state, action) => {
      state.loading = false;
      state.fonts = state.fonts.filter((font) => font._id !== action.payload);
      state.filteredFonts = state.filteredFonts.filter((font) => font._id !== action.payload);
      state.message = action.payload.message;
    },
    deleteFontFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    filterFonts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      const filtered = state.fonts.filter((font) =>
        font.family.toLowerCase().includes(searchTerm)
      );
      state.filteredFonts = filtered;
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
  getAllFontsRequest,
  getAllFontsSuccess,
  getAllFontsFail,
  createFontRequest,
  createFontSuccess,
  createFontFail,
  updateFontRequest,
  updateFontSuccess,
  updateFontFail,
  deleteFontRequest,
  deleteFontSuccess,
  deleteFontFail,
  filterFonts,
  setCurrentPage,
  clearError,
  clearMessage,
} = fontSlice.actions;

export default fontSlice.reducer;
