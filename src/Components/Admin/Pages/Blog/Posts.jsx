// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
// import { EditOutlined } from '@ant-design/icons';

// const Posts = () => {
//   const [posts, setPosts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [newPost, setNewPost] = useState({
//     title: '',
//     category: '',
//     featureImage: null,
//     description: '',
//     source: '',
//     tags: '',
//   });
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/api/posts'); // Replace with your API endpoint for posts
//         setPosts(response.data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/api/Blogcategories'); // Replace with your API endpoint for categories
//         setCategories(response.data);
//       } catch (error) {
//         console.error('Error fetching categories:', error);
//       }
//     };

//     fetchPosts();
//     fetchCategories();
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewPost({ ...newPost, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setNewPost({ ...newPost, featureImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', newPost.title);
//     formData.append('category', newPost.category);
//     formData.append('featureImage', newPost.featureImage);
//     formData.append('description', newPost.description);
//     formData.append('source', newPost.source);
//     formData.append('tags', newPost.tags);

//     try {
//       await axios.post('http://127.0.0.1:5000/api/posts', formData); // Replace with your API endpoint for creating posts
//       setPosts([...posts, newPost]); // Update local state (you might want to fetch posts again instead)
//       setNewPost({
//         title: '',
//         category: '',
//         featureImage: null,
//         description: '',
//         source: '',
//         tags: '',
//       });
//       setIsOpen(false);
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="content-area ">
//         <h4 className="heading text-2xl font-semibold mb-4">Blog Posts</h4>

//         <div className="flex justify-between mb-4">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button
//             onClick={() => setIsOpen(true)}
//             className="btn btn-primary rounded-2xl px-4 py-1 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none"
//           >
//             + Add New Post
//           </button>
//         </div>

//         <table className="min-w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-teal-400 text-white font-mono">
//               <th className="border border-gray-300 px-4 py-2">Featured Image</th>
//               <th className="border border-gray-300 px-4 py-2">Post Title</th>
//               <th className="border border-gray-300 px-4 py-2">Views</th>
//               <th className="border border-gray-300 px-4 py-2">Options</th>
//             </tr>
//           </thead>
//           <tbody>
//             {posts.map((post, index) => (
//               <tr key={index} className="hover:bg-gray-100 text-center">
//                 <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
//                   <img src={post.featureImage} alt={post.title} className="h-16 w-16  object-cover" />
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">{post.title}</td>
//                 <td className="border border-gray-300 px-4 py-2">{post.views}</td>
//                 <td className="border border-gray-300 px-4 py-2 flex justify-center space-x-2">
//                   <button className="flex items-center rounded-2xl text-white bg-blue-900 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200">
//                     <EditOutlined className="h-5 w-5 mr-1" /> Edit
//                   </button>
//                   <button className="flex items-center rounded-2xl text-white bg-red-900 hover:bg-red-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200">
//                     <TrashIcon className="h-5 w-5 mr-1" /> Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Add New Post Modal */}
//         {isOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-6 rounded shadow-md w-1/3">
//               <h2 className="text-xl font-bold mb-4">Add New Post</h2>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="category">Select Category *</label>
//                   <select
//                     name="category"
//                     id="category"
//                     value={newPost.category}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="">Select a category</option>
//                     {categories.map((category) => (
//                       <option key={category._id} value={category._id}>{category.name}</option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="title">Title *</label>
//                   <input
//                     type="text"
//                     name="title"
//                     id="title"
//                     value={newPost.title}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter post title"
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="featureImage">Current Featured Image *</label>
//                   <input
//                     type="file"
//                     name="featureImage"
//                     id="featureImage"
//                     onChange={handleFileChange}
//                     required
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="description">Description *</label>
//                   <textarea
//                     name="description"
//                     id="description"
//                     value={newPost.description}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter post description"
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="source">Source *</label>
//                   <input
//                     type="text"
//                     name="source"
//                     id="source"
//                     value={newPost.source}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter post source"
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block text-gray-700" htmlFor="tags">Tags *</label>
//                   <input
//                     type="text"
//                     name="tags"
//                     id="tags"
//                     value={newPost.tags}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="Enter post tags (comma-separated)"
//                     className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex justify-between mt-4">
//                   <button
//                     type="button"
//                     onClick={() => setIsOpen(false)}
//                     className="w-1/3 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     type="submit"
//                     className="w-1/3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700"
//                   >
//                     Create Post
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Posts;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { EditOutlined } from '@ant-design/icons';
import { message } from 'antd';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    featureImage: null,
    description: '',
    source: '',
    tags: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
    fetchCategories();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      message.error('Failed to fetch posts');
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/Blogcategories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
      message.error('Failed to fetch categories');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewPost({ ...newPost, featureImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newPost) {
      formData.append(key, newPost[key]);
    }

    try {
      if (isEditMode) {
        await axios.put(`http://127.0.0.1:5000/api/posts/${currentPost._id}`, formData);
        message.success('Post updated successfully');
      } else {
        await axios.post('http://127.0.0.1:5000/api/posts', formData);
        message.success('Post created successfully');
      }
      fetchPosts();
      setIsOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
      message.error('Failed to save post');
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setNewPost({
      title: post.title,
      category: post.category._id,
      description: post.description,
      source: post.source,
      tags: post.tags.join(','),
    });
    setIsEditMode(true);
    setIsOpen(true);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/posts/${postId}`);
      message.success('Post deleted successfully');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      message.error('Failed to delete post');
    }
  };

  const resetForm = () => {
    setNewPost({
      title: '',
      category: '',
      featureImage: null,
      description: '',
      source: '',
      tags: '',
    });
    setIsEditMode(false);
    setCurrentPost(null);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="content-area">
        <h4 className="heading text-xl sm:text-2xl font-semibold mb-4">Blog Posts</h4>

        <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
          />
          <button
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
            className="btn btn-primary rounded-2xl px-4 py-2 bg-violet-600 text-white hover:bg-violet-700 focus:outline-none w-full sm:w-auto"
          >
            + Add New Post
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-teal-400 text-white font-mono">
                <th className="border border-gray-300 px-4 py-2">Featured Image</th>
                <th className="border border-gray-300 px-4 py-2">Post Title</th>
                <th className="border border-gray-300 px-4 py-2">Views</th>
                <th className="border border-gray-300 px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-100 text-center">
                  <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
                    <img src={post.featureImage} alt={post.title} className="h-16 w-16 object-cover" />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{post.views}</td>
                  <td className="border border-gray-300 px-4 py-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                    <button
                      onClick={() => handleEdit(post)}
                      className="flex items-center justify-center rounded-2xl text-white bg-blue-900 hover:bg-blue-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                    >
                      <EditOutlined className="h-5 w-5 mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="flex items-center justify-center rounded-2xl text-white bg-red-900 hover:bg-red-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                    >
                      <TrashIcon className="h-5 w-5 mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Post Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">{isEditMode ? 'Edit Post' : 'Add New Post'}</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="category">Select Category *</label>
                  <select
                    name="category"
                    id="category"
                    value={newPost.category}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category._id} value={category._id}>{category.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="title">Title *</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter post title"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="featureImage">Featured Image *</label>
                  <input
                    type="file"
                    name="featureImage"
                    id="featureImage"
                    onChange={handleFileChange}
                    required={!isEditMode}
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="description">Description *</label>
                  <textarea
                    name="description"
                    id="description"
                    value={newPost.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter post description"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="source">Source *</label>
                  <input
                    type="text"
                    name="source"
                    id="source"
                    value={newPost.source}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter post source"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="tags">Tags *</label>
                  <input
                    type="text"
                    name="tags"
                    id="tags"
                    value={newPost.tags}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter post tags (comma-separated)"
                    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between mt-4 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      resetForm();
                    }}
                    className="w-full sm:w-1/3 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-1/3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700"
                  >
                    {isEditMode ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;

