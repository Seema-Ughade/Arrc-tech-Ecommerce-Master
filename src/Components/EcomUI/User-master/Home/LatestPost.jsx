// import React from "react";
// import postimg1 from "../Assets/postimg1.png";
// import postimg2 from "../Assets/postimg2.png";
// import { Link } from "react-router-dom";

// const Latestpost = () => {
//   return (
//     <div className=" mx-auto px-4 py-8">
//       <section className="mb-8">
//         <h2 className="text-3xl font-bold mb-2 text-center">Latest Post</h2>
//         <p className="text-gray-600 mb-4 text-center">
//           Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
//           excepteur voluptate velit ipsum esse enim.
//         </p>
//       </section>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <BlogPost
//           image={postimg1}
//           title="Fashion on a Budget: How to Look Chic Without Breaking the Bank"
//           date="02 Jan, 2019"
//           excerpt="Looking chic and stylish doesn't have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style without breaking the bank."
//         />
//         <BlogPost
//           image={postimg2}
//           title="10 Must-Have Fashion Staples for Every Woman's Wardrobe"
//           date="02 Jan, 2019"
//           excerpt="In the ever-evolving world of fashion, trends may come and go, but some pieces remain timeless. These wardrobe essentials are the foundation of a versatile and stylish closet."
//         />
//       </div>
//     </div>
//   );
// };

// const BlogPost = ({ image, title, date, excerpt }) => {
//   return (
//     <article className="bg-white rounded-lg shadow-md overflow-hidden">
//       <div className="relative h-48 md:h-64">
//         <img src={image} alt={title} className="w-full h-full object-cover" />
//       </div>
//       <div className="p-4">
//         <h3 className="text-xl font-semibold mb-2">{title}</h3>
//         <p className="text-gray-500 text-sm mb-2">{date}</p>
//         <p className="text-gray-600 mb-4">{excerpt}</p>
//         <Link to={`/blogdetails/1`}>
//           <button className="text-black-600 font-semibold hover:text-red-800 transition-colors">
//             READ MORE
//           </button>
//         </Link>
//       </div>
//     </article>
//   );
// };

// export default Latestpost;







import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Latestpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/posts');
        setPosts(response.data.slice(0, 2)); // Get only the first two posts
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Latest Posts</h2>
        <p className="text-gray-600 mb-4 text-center text-sm sm:text-base">
          Stay up to date with our most recent fashion insights and trends.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <BlogPost
            key={post._id}
            id={post._id}
            image={post.featureImage}
            title={post.title}
            date={new Date(post.createdAt).toLocaleDateString()}
            excerpt={post.description.slice(0, 150) + '...'}
          />
        ))}
      </div>
    </div>
  );
};

const BlogPost = ({ id, image, title, date, excerpt }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-xs sm:text-sm mb-2">{date}</p>
        <p className="text-gray-600 text-sm sm:text-base mb-4">{excerpt}</p>
        <Link to={`/blogdetails/${id}`}>
          <button className="text-black-600 font-semibold hover:text-red-800 transition-colors text-sm sm:text-base">
            READ MORE
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Latestpost;

