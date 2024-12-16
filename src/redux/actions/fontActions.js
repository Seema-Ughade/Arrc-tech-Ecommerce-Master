//fontactions.jsx
import axios from "axios";
import { server } from "../store";  // Your server URL
import {
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
} from "../reducers/fontsReducer";

// Action creators for async operations
export const fetchFonts = () => async (dispatch) => {
  try {
    dispatch(getAllFontsRequest());
    const { data } = await axios.get(`${server}/api/fonts`);
    dispatch(getAllFontsSuccess(data));
  } catch (error) {
    dispatch(getAllFontsFail(error.response?.data?.message || "Failed to fetch fonts"));
  }
};

export const addFont = (newFont) => async (dispatch) => {
  try {
    dispatch(createFontRequest());
    const { data } = await axios.post(`${server}/api/fonts`, newFont);
    dispatch(createFontSuccess(data));
  } catch (error) {
    dispatch(createFontFail(error.response?.data?.message || "Failed to add font"));
  }
};

export const editFont = (fontId, updatedFont) => async (dispatch) => {
  try {
    dispatch(updateFontRequest());
    const { data } = await axios.put(`${server}/api/fonts/${fontId}`, updatedFont);
    dispatch(updateFontSuccess(data));
  } catch (error) {
    dispatch(updateFontFail(error.response?.data?.message || "Failed to update font"));
  }
};

export const deleteFont = (fontId) => async (dispatch) => {
  try {
    dispatch(deleteFontRequest());
    const { data } = await axios.delete(`${server}/api/fonts/${fontId}`);
    dispatch(deleteFontSuccess(data));
  } catch (error) {
    dispatch(deleteFontFail(error.response?.data?.message || "Failed to delete font"));
  }
};
