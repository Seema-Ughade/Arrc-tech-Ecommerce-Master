import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ProductCard from '../Home/Categories';

const SellerProducts = ({ sellerId }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/products');
        // Filter products by seller
        const filtered = response.data.filter(product => product.seller === sellerId);
        setProducts(filtered.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching seller products:', error);
        setLoading(false);
      }
    };

    if (sellerId) {
      fetchSellerProducts();
    }
  }, [sellerId]);

  if (loading) {
    return <div className="animate-pulse">Loading seller products...</div>;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-8">More From This Seller</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 }
        }}
        className="seller-products-slider"
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SellerProducts;

