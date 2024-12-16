// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   loading: false,
//   categories: [], // List of categories
//   filteredCategories: [], // Filtered categories based on search term
//   category: null, // Single category data (for create/update)
//   searchTerm: '', // Search term for filtering
//   currentPage: 1, // Pagination for current page
//   itemsPerPage: 6, // Number of items per page
//   message: null, // Success message
//   error: null, // Error message
//   attributesList: [], // List of attributes for selected category
//   selectedCategoryId: null, // Selected category for managing attributes
// };

// const categorySlice = createSlice({
//   name: 'categories',
//   initialState,
//   reducers: {
//     // Fetch all categories
//     getAllCategoriesRequest: (state) => {
//       state.loading = true;
//     },
//     getAllCategoriesSuccess: (state, action) => {
//       state.loading = false;
//       state.categories = action.payload;
//       state.filteredCategories = action.payload; // Initially set filteredCategories to all categories
//     },
//     getAllCategoriesFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Create category
//     createCategoryRequest: (state) => {
//       state.loading = true;
//     },
//     createCategorySuccess: (state, action) => {
//       state.loading = false;
//       state.category = action.payload.newCategory; // Store the newly created category
//       state.message = action.payload.message;
//     },
//     createCategoryFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Update category
//     updateCategoryRequest: (state) => {
//       state.loading = true;
//     },
//     updateCategorySuccess: (state, action) => {
//       state.loading = false;
//       state.categories = state.categories.map((category) =>
//         category._id === action.payload._id ? action.payload : category
//       );
//       state.filteredCategories = state.categories; // Update filtered categories
//       state.message = action.payload.message;
//     },
//     updateCategoryFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Delete category
//     deleteCategoryRequest: (state) => {
//       state.loading = true;
//     },
//     deleteCategorySuccess: (state, action) => {
//       state.loading = false;
//       state.categories = state.categories.filter(
//         (category) => category._id !== action.payload
//       );
//       state.filteredCategories = state.filteredCategories.filter(
//         (category) => category._id !== action.payload
//       );
//       state.message = action.payload.message;
//     },
//     deleteCategoryFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Filter categories
//     filterCategories: (state, action) => {
//       const searchTerm = action.payload.toLowerCase();
//       const filtered = state.categories.filter((category) =>
//         category.name.toLowerCase().includes(searchTerm) // Example filtering by name
//       );
//       state.filteredCategories = filtered;
//       state.searchTerm = action.payload;
//       state.currentPage = 1; // Reset pagination on filter change
//     },

//     // Set pagination
//     setCurrentPage: (state, action) => {
//       state.currentPage = action.payload;
//     },

//     // Clear error
//     clearError: (state) => {
//       state.error = null;
//     },

//     // Clear success message
//     clearMessage: (state) => {
//       state.message = null;
//     },

//     // Set selected category for managing attributes
//     setSelectedCategoryId: (state, action) => {
//       state.selectedCategoryId = action.payload;
//     },

//     // Fetch attributes for selected category
//     getAttributesRequest: (state) => {
//       state.loading = true;
//     },
//     getAttributesSuccess: (state, action) => {
//       state.loading = false;
//       state.attributesList = action.payload;
//     },
//     getAttributesFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Add attribute to selected category
//     addAttributeRequest: (state) => {
//       state.loading = true;
//     },
//     addAttributeSuccess: (state, action) => {
//       state.loading = false;
//       const updatedCategories = state.categories.map(category =>
//         category._id === state.selectedCategoryId
//           ? { ...category, attributes: [...category.attributes, action.payload] }
//           : category
//       );
//       state.categories = updatedCategories;
//       state.attributesList.push(action.payload); // Add attribute to list
//       state.message = 'Attribute added successfully!';
//     },
//     addAttributeFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Update attribute for selected category
//     updateAttributeRequest: (state) => {
//       state.loading = true;
//     },
//     updateAttributeSuccess: (state, action) => {
//       state.loading = false;
//       const updatedCategories = state.categories.map(category =>
//         category._id === state.selectedCategoryId
//           ? {
//               ...category,
//               attributes: category.attributes.map(attribute =>
//                 attribute._id === action.payload._id
//                   ? action.payload
//                   : attribute
//               ),
//             }
//           : category
//       );
//       state.categories = updatedCategories;
//       state.attributesList = state.attributesList.map(attribute =>
//         attribute._id === action.payload._id ? action.payload : attribute
//       );
//       state.message = 'Attribute updated successfully!';
//     },
//     updateAttributeFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },

//     // Delete attribute from selected category
//     deleteAttributeRequest: (state) => {
//       state.loading = true;
//     },
//     deleteAttributeSuccess: (state, action) => {
//       state.loading = false;
//       const updatedCategories = state.categories.map(category =>
//         category._id === state.selectedCategoryId
//           ? {
//               ...category,
//               attributes: category.attributes.filter(
//                 (attribute) => attribute._id !== action.payload
//               ),
//             }
//           : category
//       );
//       state.categories = updatedCategories;
//       state.attributesList = state.attributesList.filter(
//         (attribute) => attribute._id !== action.payload
//       );
//       state.message = 'Attribute deleted successfully!';
//     },
//     deleteAttributeFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const {
//   getAllCategoriesRequest,
//   getAllCategoriesSuccess,
//   getAllCategoriesFail,
//   createCategoryRequest,
//   createCategorySuccess,
//   createCategoryFail,
//   updateCategoryRequest,
//   updateCategorySuccess,
//   updateCategoryFail,
//   deleteCategoryRequest,
//   deleteCategorySuccess,
//   deleteCategoryFail,
//   filterCategories,
//   setCurrentPage,
//   clearError,
//   clearMessage,
//   setSelectedCategoryId,
//   getAttributesRequest,
//   getAttributesSuccess,
//   getAttributesFail,
//   addAttributeRequest,
//   addAttributeSuccess,
//   addAttributeFail,
//   updateAttributeRequest,
//   updateAttributeSuccess,
//   updateAttributeFail,
//   deleteAttributeRequest,
//   deleteAttributeSuccess,
//   deleteAttributeFail,
// } = categorySlice.actions;

// export default categorySlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  categories: [],
  status: 'idle',
  error: null,
  selectedCategoryId: null,
  searchTerm: '',
  currentPage: 1,
};

// Async thunks
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await axios.get('/api/categories');
    return response.data;
  }
);

export const createCategory = createAsyncThunk(
  'categories/createCategory',
  async (categoryData) => {
    const response = await axios.post('/api/categories', categoryData);
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  'categories/updateCategory',
  async ({ categoryId, updatedData }) => {
    const response = await axios.put(`/api/categories/${categoryId}`, updatedData);
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  'categories/deleteCategory',
  async (categoryId) => {
    await axios.delete(`/api/categories/${categoryId}`);
    return categoryId;
  }
);

export const updateCategoryStatus = createAsyncThunk(
  'categories/updateCategoryStatus',
  async ({ categoryId, newStatus }) => {
    const response = await axios.patch(`/api/categories/${categoryId}/status`, { status: newStatus });
    return response.data;
  }
);

export const updateCategoryFeatured = createAsyncThunk(
  'categories/updateCategoryFeatured',
  async ({ categoryId, newFeatured }) => {
    const response = await axios.patch(`/api/categories/${categoryId}/featured`, { featured: newFeatured });
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action) => {
      state.selectedCategoryId = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(category => category._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(category => category._id !== action.payload);
      })
      .addCase(updateCategoryStatus.fulfilled, (state, action) => {
        const category = state.categories.find(category => category._id === action.payload._id);
        if (category) {
          category.status = action.payload.status;
        }
      })
      .addCase(updateCategoryFeatured.fulfilled, (state, action) => {
        const category = state.categories.find(category => category._id === action.payload._id);
        if (category) {
          category.featured = action.payload.featured;
        }
      });
  },
});

export const { setSelectedCategoryId, setSearchTerm, setCurrentPage } = categoriesSlice.actions;

export default categoriesSlice.reducer;

