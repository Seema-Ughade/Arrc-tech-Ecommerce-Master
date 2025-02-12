// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaUpload } from 'react-icons/fa'; // Importing the upload icon from FontAwesome
// import { SketchPicker } from 'react-color';

// const AddAffiliateProduct = () => {
//     const [product, setProduct] = useState({
//         allowProductCondition: false,
//         productCondition: "",
//         allowProductPreorder: false,
//         productPreorder: "",
//         allowMinimumOrderQty: false,
//         minimumOrderQty: 0,
//         manageStock: false,
//         stockQuantity: 0,
//         allowEstimatedShippingTime: false,
//         estimatedShippingTime: "",
//         allowProductWholeSell: false,
//         wholeSellEntries: [{ quantity: 0, discount: 0 }],
//         allowProductMeasurement: false,
//         productMeasurement: "",
//         allowProductColors: false,
//         colors: [''], // Initialize with one empty color field
//         stock: 0,
//         productName: '',
//         sku: '',
//         category: '',
//         subCategory: '',
//         childCategory: '',
//         description: '',
//         buyReturnPolicy: '',
//         allowProductSEO: false,
//         featureImage: null,
//         allowProductSizes: '',
//         price: 0,
//         discountPrice: 0,
//         youtubeUrl: '',
//         featureTags: '',
//         tags: '',
//     });
//     const [showImageInput, setShowImageInput] = useState(false);
//     const [imageInputs, setImageInputs] = useState([]);

//     const [featureImage, setFeatureImage] = useState(null);
//     const [featureTags, setFeatureTags] = useState([{ tag: '', color: '#ffffff' }]);
//     const [galleryImages, setGalleryImages] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [subCategories, setSubCategories] = useState([]);
//     const [childCategories, setChildCategories] = useState([]);

//     // Function to generate a unique SKU
//     const generateSKU = () => {
//         return Math.random().toString(36).substring(2, 8).toUpperCase();
//     };

//     const handleInputChange = (e) => {
//         setProduct({ ...product, [e.target.name]: e.target.value });
//     };

//     const handleFeatureImageChange = (e) => {
//         setProduct({ ...product, featureImage: e.target.files[0] });
//     };

//     const handleGalleryImageChange = (index, e) => {
//         const newGalleryImages = [...imageInputs];
//         newGalleryImages[index] = e.target.files[0];
//         setImageInputs(newGalleryImages);
//     };

//     const handleAddImageInput = () => {
//         setImageInputs([...imageInputs, null]);
//     };

//     const handleRemoveImageInput = (index) => {
//         const newImageInputs = imageInputs.filter((_, i) => i !== index);
//         setImageInputs(newImageInputs);
//     };

//     const handleTagChange = (index, event) => {
//         const newTags = [...featureTags];
//         newTags[index].tag = event.target.value;
//         setFeatureTags(newTags);
//     };

//     const handleColorChange = (index, event) => {
//         const newTags = [...featureTags];
//         newTags[index].color = event.target.value;
//         setFeatureTags(newTags);
//     };

//     const addNewField = () => {
//         setFeatureTags([...featureTags, { tag: '', color: '#000000' }]);
//     };

//     const removeField = (index) => {
//         const newTags = featureTags.filter((_, i) => i !== index);
//         setFeatureTags(newTags);
//     };

//     // Fetch categories, subcategories, and childcategories
//     useEffect(() => {
//         const fetchCategories = async () => {
//             const response = await axios.get(
//                 "https://ecommerce-panel-backend.onrender.com/api/categories"
//             );
//             setCategories(response.data);
//         };
//         fetchCategories();
//     }, []);

//     useEffect(() => {
//         if (product.category) {
//             const fetchSubCategories = async () => {
//                 const response = await axios.get(
//                     'https://ecommerce-panel-backend.onrender.com/api/subcategories'
//                 );
//                 setSubCategories(response.data);
//             };
//             fetchSubCategories();
//         }
//     }, [product.category]);

//     useEffect(() => {
//         if (product.subCategory) {
//             const fetchChildCategories = async () => {
//                 const response = await axios.get(
//                     'https://ecommerce-panel-backend.onrender.com/api/childcategories'
//                 );
//                 setChildCategories(response.data);
//             };
//             fetchChildCategories();
//         }
//     }, [product.subCategory]);

//     const handleChange = (e) => {
//         const { name, type, value, checked } = e.target;

//         if (type === 'checkbox') {
//             // Set the state using the 'checked' value for checkboxes
//             setProduct({ ...product, [name]: checked });
//         } else {
//             // For other types of input
//             setProduct({ ...product, [name]: value });
//         }
//     };


//     const handleFileChange = (e) => {
//         const { name, files } = e.target; // Destructure name and files from the event target

//         if (name === 'featureImage') {
//             // Set the single feature image file
//             setFeatureImage(files[0]); // Only one file for feature image
//         } else if (name === 'galleryImages') {
//             // Convert FileList to Array for multiple gallery images
//             const selectedImages = Array.from(files); // Convert FileList to Array
//             setGalleryImages(selectedImages); // Set state with the selected images
//         }
//     };
//     const handleWholeSellChange = (index, field, value) => {
//         const updatedEntries = [...product.wholeSellEntries];
//         updatedEntries[index][field] = value;
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             wholeSellEntries: updatedEntries,
//         }));
//     };

//     const addWholeSellField = () => {
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             wholeSellEntries: [...prevProduct.wholeSellEntries, { quantity: '', discount: '' }],
//         }));
//     };
//     const [showColorPicker, setShowColorPicker] = useState(Array(product.colors.length).fill(false));

//     const handleChangenew = (e) => {
//         const { name, type, checked, value } = e.target;
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleColorChangenew = (index, color) => {
//         const updatedColors = [...product.colors];
//         updatedColors[index] = color.hex; // Get the hex color code
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             colors: updatedColors,
//         }));
//         setShowColorPicker(prev => {
//             const newState = [...prev];
//             newState[index] = false; // Hide the color picker after selection
//             return newState;
//         });
//     };

//     const addColorField = () => {
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             colors: [...prevProduct.colors, ''], // Add an empty string for a new color field
//         }));
//         setShowColorPicker(prev => [...prev, false]); // Add a new state for the new color field
//     };

//     const removeColorField = (index) => {
//         const updatedColors = product.colors.filter((_, i) => i !== index);
//         setProduct((prevProduct) => ({
//             ...prevProduct,
//             colors: updatedColors,
//         }));
//         setShowColorPicker(prev => prev.filter((_, i) => i !== index)); // Remove state for the removed color field
//     };




//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(product); // Log product state

//         // Validation Check
//         if (!product.productName || !product.sku || !product.category || !product.subCategory || !product.childCategory) {
//             alert("Please fill in all required fields.");
//             return;
//         }

//         // Create a new FormData object
//         const formData = new FormData();

//         // Append product data to form data
//         for (const key in product) {
//             formData.append(key, product[key]);
//         }

//         // Append the feature image
//         if (featureImage) {
//             formData.append('featureImage', featureImage);
//         }

//         // Append the gallery images
//         galleryImages.forEach(image => {
//             formData.append('galleryImages', image);
//         });


//         // Send the request to the backend
//         try {
//             const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/products', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             console.log(response.data);
//             alert('Product created successfully!');
//             // Reset state after submission
//             setProduct({
//                 productName: '',
//                 sku: '',
//                 category: '',
//                 subCategory: '',
//                 childCategory: '',
//                 // reset other fields as necessary
//             });
//             setFeatureImage(null);
//             setGalleryImages([]);
//         } catch (error) {
//             console.error('Error creating product:', error.response ? error.response.data : error.message);
//             alert('Error creating product. Please try again.');
//         }
//     };
//     return (
//         <form onSubmit={handleSubmit} className="flex gap-8 p-8 font-sans text-gray-700">
//             {/* Left Section */}
//             <div className="w-2/3 space-y-4">
//                 <div>
//                     <label className="block font-semibold mb-2">Product Name* (In Any Language)</label>
//                     <input
//                         type="text"
//                         name="productName"
//                         value={product.productName}
//                         onChange={handleChange}
//                         placeholder="Enter Product Name"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>

//                 <div>
//                     <label className="block font-semibold mb-2">Product Sku*</label>
//                     <input
//                         type="text"
//                         name="sku"
//                         value={product.sku}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                         readOnly // Optional: Makes the SKU field read-only if you don't want the user to edit it
//                     />
//                     <button
//                         type="button"
//                         onClick={() => setProduct((prev) => ({ ...prev, sku: generateSKU() }))}
//                         className="mt-2 p-2 bg-purple-600 text-white rounded"
//                     >
//                         Generate New SKU
//                     </button>
//                 </div>

//                 <div>
//                     <label className="block font-semibold mb-2">Category*</label>
//                     <select
//                         name="category"
//                         value={product.category}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     >
//                         <option>Select Category</option>
//                         {categories.map((category) => (
//                             <option key={category._id} value={category._id}>
//                                 {category.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label className="block font-semibold mb-2">Sub Category*</label>
//                     <select
//                         name="subCategory"
//                         value={product.subCategory}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     >
//                         <option>Select Sub Category</option>
//                         {subCategories.map((subCategory) => (
//                             <option key={subCategory._id} value={subCategory._id}>
//                                 {subCategory.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label className="block font-semibold mb-2">Child Category*</label>
//                     <select
//                         name="childCategory"
//                         value={product.childCategory}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     >
//                         <option>Select Child Category</option>
//                         {childCategories.map((childCategory) => (
//                             <option key={childCategory._id} value={childCategory._id}>
//                                 {childCategory.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>

//                 {/* Checkbox Options */}
//                 <div className=" w-1/2 space-y-2">
//                     <label className="flex font-semibold items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             name="allowProductMeasurement"
//                             className="h-4 w-4 text-blue-600"
//                             checked={product.allowProductMeasurement}
//                             onChange={handleChange}
//                         />
//                         <span>Allow Product Measurement</span>
//                     </label>

//                     {product.allowProductMeasurement && (
//                         <div className="flex flex-col space-y-1">
//                             <label className="font-semibold">Product Measurement*</label>
//                             <select
//                                 id="product_measure"
//                                 name="productMeasurement"
//                                 value={product.productMeasurement}
//                                 onChange={handleChange}
//                                 className="border border-gray-300 rounded p-1"
//                             >
//                                 <option value="">None</option>
//                                 <option value="Gram">Gram</option>
//                                 <option value="Kilogram">Kilogram</option>
//                                 <option value="Litre">Litre</option>
//                                 <option value="Pound">Pound</option>
//                                 <option value="Custom">Custom</option>
//                             </select>
//                         </div>
//                     )}
//                     <label className="flex font-semibold items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             name="allowProductCondition"
//                             className="h-4 w-4 text-blue-600"
//                             onChange={handleChange}
//                         />
//                         <span>Allow Product Condition</span>
//                     </label>

//                     {product.allowProductCondition && (
//                         <div className="flex flex-col space-y-1">
//                             <label className="font-semibold">Product Condition*</label>
//                             <select
//                                 name="productCondition"
//                                 value={product.productCondition}
//                                 onChange={handleChange}
//                                 className="border border-gray-300 rounded p-1"
//                             >
//                                 <option value="">Select Condition</option>
//                                 <option value="new">New</option>
//                                 <option value="used">Used</option>
//                             </select>
//                         </div>
//                     )}
//                     <label className="flex font-semibold items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             name="allowEstimatedShippingTime"
//                             className="h-4 w-4 text-blue-600"
//                             onChange={handleChange}
//                         />
//                         <span>Allow Estimated Shipping Time</span>
//                     </label>

//                     {product.allowEstimatedShippingTime && (
//                         <div className="flex flex-col space-y-1">
//                             <label className="font-semibold">Product Estimated Shipping Time*</label>
//                             <input
//                                 type="text"
//                                 name="estimatedShippingTime"
//                                 value={product.estimatedShippingTime}
//                                 onChange={handleChange}
//                                 placeholder="Enter Estimated Shipping Time"
//                                 className="border border-gray-300 rounded p-1"
//                             />
//                         </div>
//                     )}
//                     <label className="flex font-semibold items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             name="allowProductColors"
//                             className="h-4 w-4 text-blue-600"
//                             checked={product.allowProductColors}
//                             onChange={handleChangenew}
//                         />
//                         <span>Allow Product Colors</span>
//                     </label>

//                     {product.allowProductColors && (
//                         <div>
//                             <h4 className="text-lg font-bold">Product Colors*</h4>
//                             <p className="text-sm text-gray-500">(Choose Your Favorite Colors)</p>

//                             <div className="space-y-4">
//                                 {product.colors.map((color, index) => (
//                                     <div key={index} className="flex items-center space-x-2 mb-4">
//                                         <span className="text-red-500 cursor-pointer" onClick={() => removeColorField(index)}>
//                                             <i className="fas fa-times" />
//                                         </span>
//                                         <div className="flex-grow">
//                                             <input
//                                                 type="text"
//                                                 value={color}
//                                                 readOnly
//                                                 className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
//                                                 style={{ backgroundColor: color }}
//                                                 onClick={() => {
//                                                     setShowColorPicker(prev => {
//                                                         const newState = [...prev];
//                                                         newState[index] = !newState[index]; // Toggle color picker visibility
//                                                         return newState;
//                                                     });
//                                                 }}
//                                             />
//                                             {showColorPicker[index] && (
//                                                 <SketchPicker
//                                                     color={color}
//                                                     onChangeComplete={(color) => handleColorChangenew(index, color)}
//                                                     disableAlpha
//                                                     className="mt-2"
//                                                 />
//                                             )}
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <button
//                                     className="mt-4 mb-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                                     onClick={addColorField}
//                                 >
//                                     <i className="fas fa-plus"></i> Add More Color
//                                 </button>
//                             </div>
//                         </div>
//                     )}

//                     <label className="flex font-semibold items-center space-x-2">
//                         <input
//                             type="checkbox"
//                             name="allowProductSizes"
//                             className="h-4 w-4 text-blue-600"
//                             onChange={handleChange}
//                         />
//                         <span>Allow Product Sizes</span>
//                     </label>

//                     {product.allowProductSizes && (
//                         <div className="flex flex-col space-y-1">
//                             <label className="font-semibold">Product Sizes*</label>
//                             <input
//                                 type="text"
//                                 name="productSizes"
//                                 value={product.productSizes}
//                                 onChange={handleChange}
//                                 placeholder="Enter sizes (e.g., S, M, L, XL, XXL)"
//                                 className="border border-gray-300 rounded p-1"
//                             />
//                         </div>
//                     )}

//                 </div>

//                 <div>
//                     <label className="block font-semibold mb-2">Product Description*</label>
//                     <textarea
//                         name="description"
//                         value={product.description}
//                         onChange={handleChange}
//                         placeholder="Enter Product Description"
//                         className="w-full p-2 border border-gray-300 rounded"
//                         rows={5}
//                     />
//                 </div>
//                 <div>
//                     <label className="block font-semibold mb-2">Product Buy/Return Policy*</label>
//                     <textarea
//                         name="buyReturnPolicy"
//                         value={product.buyReturnPolicy}
//                         onChange={handleChange}
//                         placeholder="Enter Product Buy/Return Policy"
//                         className="w-full p-2 border border-gray-300 rounded"
//                         rows={5}
//                     />
//                 </div>

//                 <div className=" ">
//                     <div>
//                         <label className="flex font-semibold items-center space-x-2">
//                             <input
//                                 type="checkbox"
//                                 className="h-4 w-4 text-blue-600"
//                                 name="allowProductSEO"
//                                 checked={product.allowProductSEO}
//                                 onChange={handleChange}
//                             />
//                             <span>Allow Product SEO</span>
//                         </label>

//                         {product.allowProductSEO && (
//                             <div className="flex flex-col space-y-1 mt-2">
//                                 <label className="font-semibold">Meta Tags*</label>
//                                 <input
//                                     type="text"
//                                     name="metaTags"
//                                     value={product.metaTags}
//                                     onChange={handleChange}
//                                     placeholder="Enter Meta Tags (e.g., keyword1, keyword2)"
//                                     className="border border-gray-300 rounded p-1"
//                                 />

//                                 <label className="font-semibold mt-2">Meta Description*</label>
//                                 <input
//                                     type="text"
//                                     name="metaDescription"
//                                     value={product.metaDescription}
//                                     onChange={handleChange}
//                                     placeholder="Enter Meta Description"
//                                     className="border border-gray-300 rounded p-1"
//                                 />
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </div>
//             {/* Right Section */}
//             <div className="w-1/2 space-y-4">
//                 <div className="flex flex-col gap-4">
//                     <div className="w-full">
//                         <label className="font-semibold">Feature Image Source*</label>
//                     </div>

//                     <div className="w-full">
//                         <select
//                             name="featureImageSource"
//                             value={product.featureImageSource}
//                             onChange={handleChange}
//                             className="border border-gray-300 rounded-md p-2 mt-1"
//                         >
//                             <option value="">Select Source</option>
//                             <option value="file">File</option>
//                             <option value="link">Link</option>
//                         </select>
//                     </div>

//                     {product.featureImageSource === "link" && (
//                         <div className="w-full mt-4">
//                             <label className="block text-sm font-medium text-gray-600">Feature Image Link*</label>
//                             <input
//                                 type="text"
//                                 name="featureImageLink"
//                                 value={product.featureImageLink}
//                                 onChange={handleChange}
//                                 placeholder="Enter Feature Image URL"
//                                 className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//                                 required
//                             />
//                         </div>
//                     )}

//                     {product.featureImageSource === "file" && (
//                         <div className="w-full mt-4">
//                             <div className="mb-4">
//                                 <h4 className="font-semibold">Feature Image *</h4>
//                             </div>
//                             <div className="border border-gray-300 rounded-md p-4 flex justify-center items-center">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-600">Upload Feature Image:</label>
//                                     <input
//                                         type="file"
//                                         name="featureImage"
//                                         accept="image/*"
//                                         onChange={handleFeatureImageChange}
//                                         className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//                                         required
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <div>
//                     <label className="block text-sm font-semibold text-gray-600">Product Gallery Images*</label>

//                     <button
//                         type="button"
//                         onClick={() => setShowImageInput(!showImageInput)}
//                         className="w-56 bg-purple-600 text-white py-3 rounded-md mt-4 hover:bg-purple-700 transition-colors duration-300"
//                     >
//                         {showImageInput ? 'Hide Gallery Image Inputs' : '+ Set Gallery '}
//                     </button>
//                 </div>

//                 {showImageInput && (
//                     <>
//                         {imageInputs.map((input, index) => (
//                             <div key={index} className="flex items-center space-x-2 mt-4">
//                                 <input
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={(e) => handleGalleryImageChange(index, e)}
//                                     className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => handleRemoveImageInput(index)}
//                                     className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-300"
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         ))}
//                         <button
//                             type="button"
//                             onClick={handleAddImageInput}
//                             className="w-full bg-green-600 text-white py-2 rounded-md mt-2 hover:bg-green-700 transition-colors duration-300"
//                         >
//                             Add Another Image
//                         </button>
//                     </>
//                 )}

//                 <div>
//                     <label className="block font-semibold  mb-2">Product Current Price* (In USD)</label>
//                     <input
//                         type="number"
//                         name="price"
//                         value={product.price}
//                         onChange={handleChange}
//                         placeholder="e.g 20"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div>
//                     <label className="block font-semibold mb-2">Product Discount Price* (Optional)</label>
//                     <input
//                         type="number"
//                         name="discountPrice"
//                         value={product.discountPrice}
//                         onChange={handleChange}
//                         placeholder="e.g 20"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div>
//                     <label className="block font-semibold mb-2">Youtube Video URL* (Optional)</label>
//                     <input
//                         type="url"
//                         name="youtubeUrl"
//                         value={product.youtubeUrl}
//                         onChange={handleChange}
//                         placeholder="Enter Youtube Video URL"
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <div className="col-lg-12">
//                     <div className="featured-keyword-area p-4 ">
//                         <div className="heading-area mb-4">
//                             <h4 className="title font-semibold text-xl">Feature Tags</h4>
//                         </div>
//                         <div className="feature-tag-top-fields" id="feature-section">
//                             {featureTags.map((feature, index) => (
//                                 <div key={index} className="feature-area flex items-center justify-between mb-4 border p-4 rounded-md bg-white shadow-sm">
//                                     <span
//                                         className="remove feature-remove cursor-pointer text-red-500 hover:text-red-700"
//                                         onClick={() => removeField(index)}
//                                     >
//                                         <i className="fas fa-times"></i>
//                                     </span>
//                                     <div className="w-full flex space-x-4">
//                                         <div className="w-2/3">
//                                             <input
//                                                 type="text"
//                                                 name="featureTags[]"
//                                                 value={feature.tag}
//                                                 onChange={(e) => handleTagChange(index, e)}
//                                                 placeholder="Enter Your Keyword"
//                                                 className="w-full p-2 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                                                 style={{
//                                                     WebkitTapHighlightColor: 'transparent',
//                                                     WebkitTextSizeAdjust: '100%',
//                                                     fontFamily: '"Open Sans", sans-serif',
//                                                     fontSize: '14px',
//                                                     lineHeight: '1.5',
//                                                     color: '#465541',
//                                                 }}
//                                             />
//                                         </div>
//                                         <div className="w-1/3 flex items-center space-x-2">
//                                             <input
//                                                 type="color"
//                                                 value={feature.color}
//                                                 onChange={(e) => handleColorChange(index, e)}
//                                                 className="w-12 h-10 border rounded-md"
//                                             />
//                                             <button
//                                                 type="button"
//                                                 className="text-red-500 hover:text-red-700 font-medium"
//                                                 onClick={() => removeField(index)}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="flex justify-center mt-4">
//                             <a
//                                 href="javascript:;"
//                                 id="feature-btn"
//                                 onClick={addNewField}
//                                 className="add-field-btn border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium flex items-center px-4 py-2 rounded transition duration-200"
//                             >
//                                 <i className="icofont-plus mr-2"></i>
//                                 Add More Field
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//                 <div>
//                     <label className="block font-semibold mb-2">Tags*</label>
//                     <input
//                         type="text"
//                         name="tags"
//                         value={product.tags}
//                         onChange={handleChange}
//                         className="w-full p-2 border border-gray-300 rounded"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
//                 >
//                     Create Product
//                 </button>
//             </div>
//         </form>
//     );
// };
// export default AddAffiliateProduct;




import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUpload } from 'react-icons/fa';
import { SketchPicker } from 'react-color';

const AddAffiliateProduct = () => {
    const [product, setProduct] = useState({
        productName: '',
        sku: '',
        category: '',
        subCategory: '',
        childCategory: '',
        description: '',
        buyReturnPolicy: '',
        allowProductSEO: false,
        metaTags: '',
        metaDescription: '',
        price: 0,
        discountPrice: 0,
        youtubeUrl: '',
        allowProductCondition: false,
        productCondition: "",
        allowProductMeasurement: false,
        productMeasurement: "",
        allowProductColors: false,
        colors: [''],
        allowProductSizes: false,
        productSizes: "",
        allowEstimatedShippingTime: false,
        estimatedShippingTime: "",
        featureImageSource: "",
        featureImageLink: "",
        featureImage: null,
    });

    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [childCategories, setChildCategories] = useState([]);
    const [showImageInput, setShowImageInput] = useState(false);
    const [imageInputs, setImageInputs] = useState([]);
    const [featureTags, setFeatureTags] = useState([{ tag: '', color: '#ffffff' }]);
    const [showColorPicker, setShowColorPicker] = useState([false]);

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (product.category) fetchSubCategories();
    }, [product.category]);

    useEffect(() => {
        if (product.subCategory) fetchChildCategories();
    }, [product.subCategory]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("https://ecommerce-panel-backend.onrender.com/api/categories");
            setCategories(response.data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const fetchSubCategories = async () => {
        try {
            const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/subcategories');
            setSubCategories(response.data);
        } catch (error) {
            console.error("Error fetching subcategories:", error);
        }
    };

    const fetchChildCategories = async () => {
        try {
            const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/childcategories');
            setChildCategories(response.data);
        } catch (error) {
            console.error("Error fetching child categories:", error);
        }
    };

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleColorChange = (index, color) => {
        setProduct(prev => {
            const newColors = [...prev.colors];
            newColors[index] = color.hex;
            return { ...prev, colors: newColors };
        });
        setShowColorPicker(prev => {
            const newState = [...prev];
            newState[index] = false;
            return newState;
        });
    };

    const addColorField = () => {
        setProduct(prev => ({
            ...prev,
            colors: [...prev.colors, '']
        }));
        setShowColorPicker(prev => [...prev, false]);
    };

    const removeColorField = (index) => {
        setProduct(prev => ({
            ...prev,
            colors: prev.colors.filter((_, i) => i !== index)
        }));
        setShowColorPicker(prev => prev.filter((_, i) => i !== index));
    };

    const handleFeatureImageChange = (e) => {
        setProduct(prev => ({ ...prev, featureImage: e.target.files[0] }));
    };

    const handleGalleryImageChange = (index, e) => {
        const newImageInputs = [...imageInputs];
        newImageInputs[index] = e.target.files[0];
        setImageInputs(newImageInputs);
    };

    const handleAddImageInput = () => {
        setImageInputs(prev => [...prev, null]);
    };

    const handleRemoveImageInput = (index) => {
        setImageInputs(prev => prev.filter((_, i) => i !== index));
    };

    const handleTagChange = (index, event) => {
        const newTags = [...featureTags];
        newTags[index].tag = event.target.value;
        setFeatureTags(newTags);
    };

    const handleFeatureColorChange = (index, event) => {
        const newTags = [...featureTags];
        newTags[index].color = event.target.value;
        setFeatureTags(newTags);
    };

    const addFeatureTag = () => {
        setFeatureTags(prev => [...prev, { tag: '', color: '#ffffff' }]);
    };

    const removeFeatureTag = (index) => {
        setFeatureTags(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!product.productName || !product.sku || !product.category || !product.subCategory || !product.childCategory) {
            alert("Please fill in all required fields.");
            return;
        }

        const formData = new FormData();

        for (const key in product) {
            if (key === 'colors' || key === 'featureImage') continue;
            formData.append(key, product[key]);
        }

        product.colors.forEach((color, index) => {
            formData.append(`colors[${index}]`, color);
        });

        if (product.featureImage) {
            formData.append('featureImage', product.featureImage);
        }

        imageInputs.forEach((image, index) => {
            if (image) formData.append(`galleryImages`, image);
        });

        featureTags.forEach((tag, index) => {
            formData.append(`featureTags[${index}][tag]`, tag.tag);
            formData.append(`featureTags[${index}][color]`, tag.color);
        });

        try {
            const response = await axios.post('https://ecommerce-panel-backend.onrender.com/api/affiliateproduct', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(response.data);
            alert('Product created successfully!');
            // Reset form state here
        } catch (error) {
            console.error('Error creating product:', error.response ? error.response.data : error.message);
            alert('Error creating product. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-8 p-8 font-sans text-gray-700">
            {/* Left Section */}
            <div className="w-2/3 space-y-4">
                {/* Product Name */}
                <div>
                    <label className="block font-semibold mb-2">Product Name* (In Any Language)</label>
                    <input
                        type="text"
                        name="productName"
                        value={product.productName}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Product SKU */}
                <div>
                    <label className="block font-semibold mb-2">Product Sku*</label>
                    <input
                        type="text"
                        name="sku"
                        value={product.sku}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Category */}
                <div>
                    <label className="block font-semibold mb-2">Category*</label>
                    <select
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sub Category */}
                <div>
                    <label className="block font-semibold mb-2">Sub Category*</label>
                    <select
                        name="subCategory"
                        value={product.subCategory}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Sub Category</option>
                        {subCategories.map((subCategory) => (
                            <option key={subCategory._id} value={subCategory._id}>
                                {subCategory.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Child Category */}
                <div>
                    <label className="block font-semibold mb-2">Child Category*</label>
                    <select
                        name="childCategory"
                        value={product.childCategory}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Child Category</option>
                        {childCategories.map((childCategory) => (
                            <option key={childCategory._id} value={childCategory._id}>
                                {childCategory.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Description */}
                <div>
                    <label className="block font-semibold mb-2">Product Description*</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Enter Product Description"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={5}
                    />
                </div>

                {/* Product Buy/Return Policy */}
                <div>
                    <label className="block font-semibold mb-2">Product Buy/Return Policy*</label>
                    <textarea
                        name="buyReturnPolicy"
                        value={product.buyReturnPolicy}
                        onChange={handleChange}
                        placeholder="Enter Product Buy/Return Policy"
                        className="w-full p-2 border border-gray-300 rounded"
                        rows={5}
                    />
                </div>

                {/* Product SEO */}
                <div>
                    <label className="flex font-semibold items-center space-x-2">
                        <input
                            type="checkbox"
                            name="allowProductSEO"
                            checked={product.allowProductSEO}
                            onChange={handleChange}
                            className="h-4 w-4 text-blue-600"
                        />
                        <span>Allow Product SEO</span>
                    </label>

                    {product.allowProductSEO && (
                        <div className="mt-2 space-y-2">
                            <input
                                type="text"
                                name="metaTags"
                                value={product.metaTags}
                                onChange={handleChange}
                                placeholder="Enter Meta Tags (e.g., keyword1, keyword2)"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <textarea
                                name="metaDescription"
                                value={product.metaDescription}
                                onChange={handleChange}
                                placeholder="Enter Meta Description"
                                className="w-full p-2 border border-gray-300 rounded"
                                rows={3}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Right Section */}
            <div className="w-1/3 space-y-4">
                {/* Feature Image */}
                <div>
                    <label className="block font-semibold mb-2">Feature Image Source*</label>
                    <select
                        name="featureImageSource"
                        value={product.featureImageSource}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Select Source</option>
                        <option value="file">File</option>
                        <option value="link">Link</option>
                    </select>

                    {product.featureImageSource === "link" && (
                        <input
                            type="text"
                            name="featureImageLink"
                            value={product.featureImageLink}
                            onChange={handleChange}
                            placeholder="Enter Feature Image URL"
                            className="w-full p-2 mt-2 border border-gray-300 rounded"
                        />
                    )}

                    {product.featureImageSource === "file" && (
                        <input
                            type="file"
                            name="featureImage"
                            onChange={handleFeatureImageChange}
                            className="w-full p-2 mt-2 border border-gray-300 rounded"
                        />
                    )}
                </div>

                {/* Gallery Images */}
                <div>
                    <label className="block font-semibold mb-2">Product Gallery Images</label>
                    <button
                        type="button"
                        onClick={() => setShowImageInput(!showImageInput)}
                        className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
                    >
                        {showImageInput ? 'Hide Gallery Image Inputs' : '+ Set Gallery'}
                    </button>

                    {showImageInput && (
                        <div className="mt-2 space-y-2">
                            {imageInputs.map((_, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                    <input
                                        type="file"
                                        onChange={(e) => handleGalleryImageChange(index, e)}
                                        className="flex-grow p-2 border border-gray-300 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImageInput(index)}
                                        className="bg-red-500 text-white px-2 py-1 rounded"
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={handleAddImageInput}
                                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                            >
                                Add Another Image
                            </button>
                        </div>
                    )}
                </div>

                {/* Product Price */}
                <div>
                    <label className="block font-semibold mb-2">Product Current Price* (In USD)</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="e.g 20"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Product Discount Price */}
                <div>
                    <label className="block font-semibold mb-2">Product Discount Price (Optional)</label>
                    <input
                        type="number"
                        name="discountPrice"
                        value={product.discountPrice}
                        onChange={handleChange}
                        placeholder="e.g 15"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Youtube Video URL */}
                <div>
                    <label className="block font-semibold mb-2">Youtube Video URL (Optional)</label>
                    <input
                        type="url"
                        name="youtubeUrl"
                        value={product.youtubeUrl}
                        onChange={handleChange}
                        placeholder="Enter Youtube Video URL"
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                {/* Feature Tags */}
                <div>
                    <h4 className="font-semibold text-xl mb-2">Feature Tags</h4>
                    {featureTags.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <input
                                type="text"
                                value={feature.tag}
                                onChange={(e) => handleTagChange(index, e)}
                                placeholder="Enter Your Keyword"
                                className="flex-grow p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="color"
                                value={feature.color}
                                onChange={(e) => handleFeatureColorChange(index, e)}
                                className="w-10 h-10 border rounded"
                            />
                            <button
                                type="button"
                                onClick={() => removeFeatureTag(index)}
                                className="text-red-500 hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addFeatureTag}
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Add More Field
                    </button>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600"
                >
                    Create Product
                </button>
            </div>
        </form>
    );
};

export default AddAffiliateProduct;

