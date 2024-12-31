// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import ProductList from './ProductList';
// import UserForm from './UserForm';
// import Cart from './Cart';
// import QuantityModal from './QuantityModal';

// const ProductUserDetail = () => {
//   const [users, setUsers] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [selectedUser, setSelectedUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [productsResponse, usersResponse] = await Promise.all([
//           axios.get('https://ecommerce-panel-backend.onrender.com/api/products/'),
//           axios.get('https://ecommerce-panel-backend.onrender.com/api/customers')
//         ]);
//         setProducts(productsResponse.data);
//         setUsers(usersResponse.data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching data. Please try again later.');
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleAddProduct = (product) => {
//     setSelectedProduct(product);
//     setIsModalOpen(true);
//   };

//   const handleAddToCart = ({ size, color }) => {
//     if (selectedProduct) {
//       const existingProduct = cart.find(item => 
//         item._id === selectedProduct._id && 
//         item.size === size && 
//         item.color === color
//       );
      
//       if (existingProduct) {
//         setCart(cart.map(item => 
//           (item._id === selectedProduct._id && item.size === size && item.color === color)
//             ? { ...item, quantity: item.quantity + quantity }
//             : item
//         ));
//       } else {
//         setCart([...cart, { 
//           ...selectedProduct, 
//           quantity,
//           size,
//           color
//         }]);
//       }
//       setQuantity(1);
//       setIsModalOpen(false);
//       setSelectedProduct(null);
//       toast.success('Product added to cart');
//     }
//   };

//   const handleRemoveFromCart = (productId) => {
//     setCart(cart.filter(item => item._id !== productId));
//     toast.info('Product removed from cart');
//   };

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//   };

//   const handleSubmitOrder = async (formData) => {
//     if (cart.length === 0) {
//       toast.error('Please add products to the cart before submitting the order');
//       return;
//     }

//     if (!selectedUser) {
//       toast.error('Please select a user before submitting the order');
//       return;
//     }

//     const orderData = {
//       userId: selectedUser._id,
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       shippingName: formData.name,
//       address: formData.address,
//       postalCode: formData.postalCode,
//       country: formData.country,
//       paymentMethod: formData.paymentMethod,
//       products: cart.map(item => ({
//         productId: item._id,
//         quantity: item.quantity,
//         price: item.price,
//         size: item.size,
//         color: item.color
//       })),
//       totalAmount: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
//     };

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/Uiorder', orderData);
//       toast.success('Order submitted successfully');
//       setCart([]);
//       setSelectedUser(null);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       toast.error('Failed to submit order. Please try again.');
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-xl font-semibold text-gray-700">Loading...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-xl font-semibold text-red-600">{error}</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-8">
//           <div className="w-full lg:w-1/3">
//             <ProductList products={products} onAddProduct={handleAddProduct} />
//           </div>
//           <div className="w-full lg:w-2/3 space-y-8">
//             <UserForm users={users} onUserSelect={handleUserSelect} onSubmit={handleSubmitOrder} />
//             <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
//           </div>
//         </div>
//       </div>
//       <QuantityModal 
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onConfirm={handleAddToCart}
//         quantity={quantity}
//         setQuantity={setQuantity}
//         product={selectedProduct}
//       />
//     </div>
//   );
// };

// export default ProductUserDetail;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import ProductList from './ProductList';
import UserForm from './UserForm';
import Cart from './Cart';
import QuantityModal from './QuantityModal';

const ProductUserDetail = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, usersResponse] = await Promise.all([
          axios.get('https://ecommerce-panel-backend.onrender.com/api/products/'),
          axios.get('https://ecommerce-panel-backend.onrender.com/api/customers')
        ]);
        setProducts(productsResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAddProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleAddToCart = ({ size, color }) => {
    if (selectedProduct) {
      const existingProduct = cart.find(item => 
        item._id === selectedProduct._id && 
        item.size === size && 
        item.color === color
      );
      
      if (existingProduct) {
        setCart(cart.map(item => 
          (item._id === selectedProduct._id && item.size === size && item.color === color)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ));
      } else {
        setCart([...cart, { 
          ...selectedProduct, 
          quantity,
          size,
          color
        }]);
      }
      setQuantity(1);
      setIsModalOpen(false);
      setSelectedProduct(null);
      toast.success('Product added to cart');
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
    toast.info('Product removed from cart');
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSubmitOrder = async (formData) => {
    if (cart.length === 0) {
      toast.error('Please add products to the cart before submitting the order');
      return;
    }

    if (!selectedUser) {
      toast.error('Please select a user before submitting the order');
      return;
    }

    const orderData = {
      userId: selectedUser._id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      shippingName: formData.name,
      address: formData.address,
      postalCode: formData.postalCode,
      country: formData.country,
      paymentMethod: formData.paymentMethod,
      items: cart.map(item => ({
        productId: item._id,
        quantity: item.quantity,
        price: item.price,
        size: item.size,
        color: item.color
      })),
      totalAmount: cart.reduce((total, item) => total + (item.price * item.quantity), 0),
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/Uiorder', orderData);
      toast.success('Order submitted successfully');
      setCart([]);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error('Failed to submit order. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <ProductList products={products} onAddProduct={handleAddProduct} />
          </div>
          <div className="w-full lg:w-2/3 space-y-8">
            <UserForm users={users} onUserSelect={handleUserSelect} onSubmit={handleSubmitOrder} />
            <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
          </div>
        </div>
      </div>
      <QuantityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleAddToCart}
        quantity={quantity}
        setQuantity={setQuantity}
        product={selectedProduct}
      />
    </div>
  );
};

export default ProductUserDetail;

