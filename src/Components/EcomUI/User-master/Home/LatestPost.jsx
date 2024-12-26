import React from "react";
import postimg1 from "../Assets/postimg1.png";
import postimg2 from "../Assets/postimg2.png";
import { Link } from "react-router-dom";

const Latestpost = () => {
  return (
    <div className=" mx-auto px-4 py-8">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-2 text-center">Latest Post</h2>
        <p className="text-gray-600 mb-4 text-center">
          Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud
          excepteur voluptate velit ipsum esse enim.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BlogPost
          image={postimg1}
          title="Fashion on a Budget: How to Look Chic Without Breaking the Bank"
          date="02 Jan, 2019"
          excerpt="Looking chic and stylish doesn't have to come with a hefty price tag. With the right strategies, you can build a fashionable wardrobe that reflects your personal style without breaking the bank."
        />
        <BlogPost
          image={postimg2}
          title="10 Must-Have Fashion Staples for Every Woman's Wardrobe"
          date="02 Jan, 2019"
          excerpt="In the ever-evolving world of fashion, trends may come and go, but some pieces remain timeless. These wardrobe essentials are the foundation of a versatile and stylish closet."
        />
      </div>
    </div>
  );
};

const BlogPost = ({ image, title, date, excerpt }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <Link to={`/blogdetails/1`}>
          <button className="text-black-600 font-semibold hover:text-red-800 transition-colors">
            READ MORE
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Latestpost;
