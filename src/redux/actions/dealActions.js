import axios from "axios";
import {
  getDealRequest,
  getDealSuccess,
  getDealFail,
  createDealRequest,
  createDealSuccess,
  createDealFail,
  updateDealRequest,
  updateDealSuccess,
  updateDealFail,
} from "../reducers/dealReducer";

const server = "http://localhost:5000"; // Replace with your server URL

export const getDeal = () => async (dispatch) => {
  try {
    dispatch(getDealRequest());
    const { data } = await axios.get(`${server}/api/deal-of-day`, {
      withCredentials: true,
    });
    dispatch(getDealSuccess(data.deal));
  } catch (error) {
    dispatch(getDealFail(error.response.data.message));
  }
};

export const createDeal = (formData) => async (dispatch) => {
  try {
    dispatch(createDealRequest());
    const { data } = await axios.post(`${server}/api/deal-of-day`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch(createDealSuccess(data));
  } catch (error) {
    dispatch(createDealFail(error.response.data.message));
  }
};

export const updateDeal = (formData) => async (dispatch) => {
  try {
    dispatch(updateDealRequest());
    const { data } = await axios.put(`${server}/api/deal-of-day`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
      withCredentials: true,
    });
    dispatch(updateDealSuccess(data));
  } catch (error) {
    dispatch(updateDealFail(error.response.data.message));
  }
};

