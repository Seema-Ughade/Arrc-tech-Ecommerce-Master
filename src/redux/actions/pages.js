import axios from "axios";
import { server } from "../store";
import {
  createPageFail,
  createPageRequest,
  createPageSuccess,
  deletePageFail,
  deletePageRequest,
  deletePageSuccess,
  getAllPagesFail,
  getAllPagesRequest,
  getAllPagesSuccess,
  updatePageFail,
  updatePageRequest,
  updatePageSuccess,
} from "../reducers/pagesReducer.js";

export const createPage = (formdata) => async (dispatch) => {
  try {
    dispatch(createPageRequest());
    const { data } = await axios.post(`${server}/page/savePage`, formdata, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });

    console.log(data);

    dispatch(createPageSuccess(data));
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    dispatch(createPageFail(error.response.data.message));
  }
};

export const updatePage = (formdata, pageId) => async (dispatch) => {
  try {
    dispatch(updatePageRequest());
    const { data } = await axios.put(
      `${server}/page/updatePage/${pageId}`,
      formdata,
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(updatePageSuccess(data));
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    dispatch(updatePageFail(error.response.data.message));
  }
};

export const getAllPages = () => async (dispatch) => {
  try {
    dispatch(getAllPagesRequest());
    const { data } = await axios.get(`${server}/page/getAllPages`, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(getAllPagesSuccess(data.pages));
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    dispatch(getAllPagesFail(error.response.data.message));
  }
};

export const deletePage = (pageId) => async (dispatch) => {
  try {
    dispatch(deletePageRequest());
    const { data } = await axios.delete(`${server}/page/deletePage/${pageId}`, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });

    dispatch(deletePageSuccess(data.message));
  } catch (error) {
    console.log("🚀 ~ login ~ error:", error);
    dispatch(deletePageFail(error.response.data.message));
  }
};

import axios from "axios";
import { server } from "../store"; // Your server URL

// Import actions from your Redux slice (adjust with your component name)
import {
  createComponentFail,
  createComponentRequest,
  createComponentSuccess,
  deleteComponentFail,
  deleteComponentRequest,
  deleteComponentSuccess,
  getAllComponentsFail,
  getAllComponentsRequest,
  getAllComponentsSuccess,
  updateComponentFail,
  updateComponentRequest,
  updateComponentSuccess,
} from "../reducers/componentReducer.js"; // Adjust the import paths and reducer names

// Create component action
export const createComponent = (formData) => async (dispatch) => {
  try {
    dispatch(createComponentRequest());
    const { data } = await axios.post(
      `${server}/api/component/createComponent`, // Adjust the endpoint
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data", // Adjust based on your form data
        },
        withCredentials: true,
      }
    );
    dispatch(createComponentSuccess(data));
  } catch (error) {
    console.error("Error creating component:", error);
    dispatch(createComponentFail(error.response.data.message));
  }
};

// Update component action
export const updateComponent = (formData, componentId) => async (dispatch) => {
  try {
    dispatch(updateComponentRequest());
    const { data } = await axios.put(
      `${server}/api/component/updateComponent/${componentId}`, // Adjust the endpoint
      formData,
      {
        headers: {
          "Content-type": "multipart/form-data", // Adjust based on your form data
        },
        withCredentials: true,
      }
    );
    dispatch(updateComponentSuccess(data));
  } catch (error) {
    console.error("Error updating component:", error);
    dispatch(updateComponentFail(error.response.data.message));
  }
};

// Get all components action
export const getAllComponents = () => async (dispatch) => {
  try {
    dispatch(getAllComponentsRequest());
    const { data } = await axios.get(`${server}/api/component/getAllComponents`, {
      headers: {
        "Content-type": "application/json",
      },
      withCredentials: true,
    });
    dispatch(getAllComponentsSuccess(data.components)); // Adjust based on your API response
  } catch (error) {
    console.error("Error fetching components:", error);
    dispatch(getAllComponentsFail(error.response.data.message));
  }
};

// Delete component action
export const deleteComponent = (componentId) => async (dispatch) => {
  try {
    dispatch(deleteComponentRequest());
    const { data } = await axios.delete(
      `${server}/api/component/deleteComponent/${componentId}`, // Adjust the endpoint
      {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      }
    );
    dispatch(deleteComponentSuccess(data.message)); // Adjust based on your API response
  } catch (error) {
    console.error("Error deleting component:", error);
    dispatch(deleteComponentFail(error.response.data.message));
  }
};
