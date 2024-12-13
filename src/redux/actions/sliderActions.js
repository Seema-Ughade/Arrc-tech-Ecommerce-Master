// import axios from "axios";
// import { server } from "../store";
// import {
//   createSliderFail,
//   createSliderRequest,
//   createSliderSuccess,
//   deleteSliderImageFail,
//   deleteSliderImageRequest,
//   deleteSliderImageSuccess,
//   getAllSliderImagesFail,
//   getAllSliderImagesRequest,
//   getAllSliderImagesSuccess,
//   updateSliderFail,
//   updateSliderRequest,
//   updateSliderSuccess,
// } from "../reducers/sliderReducer";

// // Create Slider
// export const createSlider = (formData) => async (dispatch) => {
//   try {
//     dispatch(createSliderRequest());
//     const { data } = await axios.post(
//       `${server}/api/sliders`, // Adjusted URL for creating a slider
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       }
//     );
//     dispatch(createSliderSuccess(data));
//   } catch (error) {
//     console.error("Error creating slider:", error);
//     dispatch(createSliderFail(error.response?.data?.message || "Failed to create slider"));
//   }
// };

// // Update Slider
// export const updateSlider = (formData, sliderId) => async (dispatch) => {
//   try {
//     dispatch(updateSliderRequest());
//     const { data } = await axios.put(
//       `${server}/api/sliders/${sliderId}`, // Adjusted URL for updating a slider
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       }
//     );
//     dispatch(updateSliderSuccess(data));
//   } catch (error) {
//     console.error("Error updating slider:", error);
//     dispatch(updateSliderFail(error.response?.data?.message || "Failed to update slider"));
//   }
// };

// // Fetch All Sliders
// export const getAllSliderImages = () => async (dispatch) => {
//   try {
//     dispatch(getAllSliderImagesRequest());
//     const { data } = await axios.get(`${server}/api/sliders`, { // URL for fetching all sliders
//       headers: {
//         "Content-Type": "application/json",
//       },
//       withCredentials: true,
//     });
//     dispatch(getAllSliderImagesSuccess(data.sliderImages));
//   } catch (error) {
//     console.error("Error fetching sliders:", error);
//     dispatch(getAllSliderImagesFail(error.response?.data?.message || "Failed to fetch sliders"));
//   }
// };

// // Delete Slider
// export const deleteSliderImage = (sliderId) => async (dispatch) => {
//   try {
//     dispatch(deleteSliderImageRequest());
//     const { data } = await axios.delete(
//       `${server}/api/sliders/${sliderId}`, // Adjusted URL for deleting a slider
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       }
//     );
//     dispatch(deleteSliderImageSuccess(data.message));
//   } catch (error) {
//     console.error("Error deleting slider:", error);
//     dispatch(deleteSliderImageFail(error.response?.data?.message || "Failed to delete slider"));
//   }
// };

import axios from "axios";
import { server } from "../store"; // Your server URL
import {
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
} from "../reducers/sliderReducer"; // Assuming you have a sliderReducer

// Fetch sliders
export const fetchSliders = () => async (dispatch) => {
  try {
    dispatch(getAllSlidersRequest());
    const { data } = await axios.get(`${server}/api/sliders`);
    dispatch(getAllSlidersSuccess(data));
  } catch (error) {
    dispatch(getAllSlidersFail(error.response?.data?.message || "Failed to fetch sliders"));
  }
};

// Add new slider
export const addSlider = (newSlider) => async (dispatch) => {
    try {
      dispatch(createSliderRequest());
      const formData = new FormData();
      formData.append('name', newSlider.name);
      formData.append('slug', newSlider.slug);
      if (newSlider.image) {
        formData.append('image', newSlider.image);
      }
  
      const response = await fetch(`${server}/api/sliders`, {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create slider');
      }
  
      const data = await response.json();
      dispatch(createSliderSuccess(data));
    } catch (error) {
      dispatch(createSliderFail(error.message));
    }
  };
  
// Update existing slider
export const updateSlider = (sliderId, updatedSlider) => async (dispatch) => {
  try {
    dispatch(updateSliderRequest());
    const formData = new FormData();
    formData.append('name', updatedSlider.name);
    formData.append('slug', updatedSlider.slug);
    if (updatedSlider.image) {
      formData.append('image', updatedSlider.image);
    }

    const { data } = await axios.put(
      `${server}/api/sliders/${sliderId}`,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    dispatch(updateSliderSuccess(data));
  } catch (error) {
    dispatch(updateSliderFail(error.response?.data?.message || "Failed to update slider"));
  }
};

// Delete slider
export const deleteSlider = (sliderId) => async (dispatch) => {
  try {
    dispatch(deleteSliderRequest());
    const { data } = await axios.delete(`${server}/api/sliders/${sliderId}`);
    dispatch(deleteSliderSuccess(data));
  } catch (error) {
    dispatch(deleteSliderFail(error.response?.data?.message || "Failed to delete slider"));
  }
};
