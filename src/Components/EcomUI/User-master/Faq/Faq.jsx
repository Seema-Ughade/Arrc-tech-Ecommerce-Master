// import React, { useState } from "react";
// import allimg from "../Assets/allpage.png";

// function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAnswer = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const faqs = [
//     {
//       question: "What is Arrc Technology and How does it work?",
//       answer:"Arrc Technology is a dynamic multivendor eCommerce platform that brings together a diverse range of sellers and products, all under one virtual roof. Whether you're looking for the latest fashion trends, cutting-edge electronics, or unique home goods, you’ll find them here. Each vendor on Arrc Technology manages their own store, allowing them to offer a wide variety of products with different styles, prices, and specialties. As a customer, you can browse through these offerings, compare products, and make purchases directly from the sellers, all through the Arrc Technology interface. Our platform ensures a seamless shopping experience, from product discovery to payment and delivery.",
//     },
//     {
//       question: "How do I create an account on Arrc Technology and what are the benefits?",
//       answer:
//         "Creating an account on Arrc Technology is simple and offers a range of benefits that enhance your shopping experience. To get started, click on the Sign Up button located at the top right corner of our homepage. You’ll be prompted to fill in some basic information, such as your name, email address, and a secure password. Once you’ve completed the registration, you can immediately start browsing and shopping. As a registered user, you’ll enjoy features like personalized recommendations, easy access to your order history, and the ability to save products to your wishlist for future purchase. Plus, you’ll be able to track your orders in real time and leave reviews on products you’ve purchased.",
//     },
//     {
//       question: "How can I become a seller on Arrc Technology, and what are the requirements?",
//       answer: "Becoming a seller on Arrc Technology is a fantastic opportunity to reach a broad audience of potential customers. To join our community of sellers, click on the Sell with Us link found on our homepage. You will need to fill out a registration form with details about your business, including your business name, contact information, and the types of products you intend to sell. In addition, you will need to submit certain documents for verification purposes, such as proof of business registration and identity verification. Once your application is submitted, our team will review it to ensure it meets our standards. If approved, you’ll receive instructions on how to set up your store and start listing products. As a seller on Arrc Technology, you’ll gain access to our robust platform tools that help manage inventory, process orders, and communicate with customers.",
//     },
//     {
//       question: "How do I place an order on Arrc Technology, and what should I know before purchasing?",
//       answer: "Placing an order on Arrc Technology is designed to be straightforward and user-friendly. First, browse through our extensive catalog of products, or use the search bar to find something specific. Once you’ve found an item you wish to purchase, click on it to view detailed information, including product descriptions, specifications, and customer reviews. If you’re satisfied with the item, select any necessary options (like size or color), and click Add to Cart. You can continue shopping or proceed directly to checkout. At checkout, you’ll be asked to provide your shipping details and select a payment method. Before completing your purchase, review your order to ensure everything is correct. After placing your order, you will receive an order confirmation via email, and you’ll be kept updated on its status until it arrives at your doorstep.",
//     },
//     {
//       question: "What payment methods does Arrc Technology accept, and are transactions secure?",
//       answer: "Arrc Technology accepts a variety of payment methods to make your shopping experience as convenient as possible. You can pay using major credit and debit cards, such as Visa, MasterCard, and American Express. We also accept payments through PayPal and other popular digital wallets. For added flexibility, we offer support for several regional payment methods depending on your location. All transactions on Arrc Technology are secured using the latest encryption technologies, ensuring your payment information is safe and confidential. We also monitor transactions for any signs of fraud to protect our customers. Your financial security is a top priority for us.",
//     },
//     {
//       question: "Can I track my order on Arrc Technology, and how does the tracking process work?",
//       answer: " Yes, Arrc Technology provides a comprehensive order tracking system to keep you informed every step of the way. Once your order has been processed and shipped, you will receive an email containing a tracking number. This tracking number can be used to monitor the progress of your delivery. Simply go to the Track Order section on our website, enter your tracking number, and you’ll be able to see real-time updates on your shipment’s location. You can also track your order through your account dashboard if you’re a registered user. This ensures you know exactly when to expect your package, and it provides peace of mind that your order is on its way.",
//     },
//     {
//       question: "What is the return policy on Arrc Technology, and how do I return a product?",
//       answer: "The return policy on Arrc Technology is designed to be as fair and straightforward as possible, though it may vary depending on the individual seller. Generally, most products can be returned within 14 days of receiving your order, provided they are unused and in their original packaging. To initiate a return, log in to your account, go to your order history, and select the item you wish to return. Follow the on-screen instructions to complete the return request, which may involve printing a return label and dropping the item off at a designated location. Once the return is received and inspected by the seller, your refund will be processed. Please note that certain items, like perishable goods or customized products, may not be eligible for return. Always check the specific return policy on the product page before making a purchase.",
//     },
//     {
//       question: "How do I contact Arrc Technology customer support, and what kind of assistance is available?",
//       answer: " If you need assistance with anything related to your Arrc Technology experience, our customer support team is here to help. You can reach out to us through the Contact Us page on our website, where you’ll find a form to submit your query. Additionally, we offer live chat support for immediate assistance with urgent matters. Whether you have questions about a product, need help with an order, or have concerns about a seller, our dedicated team is ready to provide the support you need. We strive to respond to all inquiries as quickly as possible, ensuring you have a smooth and satisfying shopping experience.",
//     },
//     {
//       question: "Are there any shipping charges on Arrc Technology, and how are they calculated?",
//       answer: "Shipping charges on Arrc Technology can vary depending on several factors, including the seller, the destination of the delivery, and the size or weight of the items purchased. Some sellers may offer free shipping on certain products or orders above a specific amount, while others may charge a nominal fee to cover shipping costs. During the checkout process, you will see the total shipping cost before completing your purchase, so there are no surprises. The shipping charges are calculated based on real-time rates from our logistics partners, ensuring that you receive the best possible service. You can also choose from different shipping options, such as standard or express delivery, depending on how quickly you need your items.",
//     },
//     {
//       question: "How do I leave a review for a product on Arrc Technology, and why is it important?",
//       answer: "Leaving a review on Arrc Technology is a great way to share your experience with other shoppers and help them make informed decisions. After you’ve received your purchase, you’ll receive an email inviting you to leave a review. Alternatively, you can log in to your Arrc Technology account, go to your order history, and click on the product you wish to review. On the product page, youll find the option to rate the item and leave detailed feedback about your experience, including the product’s quality, value for money, and how it met your expectations. Your review is valuable not only to other shoppers but also to the sellers, as it helps them improve their products and services. Honest reviews contribute to a trustworthy and reliable marketplace.",
//     },
//     {
//       question: "How do I know if a seller on Arrc Technology is trustworthy?",
//       answer: "At Arrc Technology, we prioritize creating a safe and reliable marketplace for our customers. To ensure that our sellers meet high standards, we thoroughly vet them during the registration process. Additionally, each seller on our platform has a rating based on customer reviews and feedback. When you view a product, you can see the seller’s rating, the number of transactions theyve completed, and read reviews from previous customers. These ratings and reviews are valuable tools to help you assess the trustworthiness of a seller before making a purchase. If you ever have concerns about a seller, our customer support team is available to assist you.",
//     },
//     {
//       question: "What should I do if I receive a damaged or defective product?",
//       answer: "If you receive a damaged or defective product, we understand how frustrating that can be, and we’re here to help resolve the issue quickly. First, we recommend taking photos of the damaged or defective item as evidence. Then, log in to your Arrc Technology account and go to your order history. Select the item in question and choose the option to report an issue. You will be guided through the process of submitting your claim, which includes providing details about the damage or defect and uploading the photos you’ve taken. Our team will review your claim and, depending on the situation, arrange for a replacement, repair, or refund. We aim to make this process as smooth and hassle-free as possible.",
//     },
//     {
//       question: "Can I cancel my order on Arrc Technology, and what are the conditions?",
//       answer: "Yes, you can cancel your order on Arrc Technology, but the ability to do so depends on the status of your order. If your order has not yet been processed or shipped, you can easily cancel it by logging into your account, going to your order history, and selecting the Cancel Order option next to the item you wish to cancel. If your order has already been shipped, cancellation may not be possible, and you may need to wait until you receive the item to initiate a return. It’s important to act quickly if you wish to cancel an order, as our sellers work hard to process and ship orders promptly. Please review the specific cancellation policy on the product page for more details.",
//     },
//     {
//       question: "Does Arrc Technology offer any promotions or discounts, and how can I find them?",
//       answer: "Yes, Arrc Technology frequently offers promotions, discounts, and special deals to enhance your shopping experience. You can find these promotions by visiting the Deals or Offers  section on our website, where we regularly update the latest discounts available from various sellers. Additionally, by signing up for our newsletter, you can receive exclusive discount codes and be the first to know about upcoming sales events. Many sellers also offer seasonal promotions or discounts on specific product categories, so it’s a good idea to check back often to take advantage of these savings. You can also find promotional banners on the homepage that highlight ongoing deals.",
//     },
//     {
//       question: "What steps does Arrc Technology take to ensure product authenticity?",
//       answer: "Arrc Technology is committed to offering only genuine and authentic products to our customers. We work closely with our sellers to ensure that all items listed on our platform meet our strict quality and authenticity standards. Sellers are required to provide proof of authenticity for branded products, and we conduct regular audits to ensure compliance. Additionally, our customer review system allows shoppers to report any concerns about product authenticity. If a product is found to be counterfeit, we take immediate action, including removing the product from our platform and taking appropriate measures against the seller. Your trust is important to us, and we strive to create a marketplace where you can shop with confidence.",
//     },

//   ];

//   return (
      
//        <div className="aboutus">
//         <div className="object-cover relative">
//             <img src={allimg} alt="" className="w-screen h-[300px]" />
//             <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-white text-4xl font-bold">FAQ</h1>
//           <h3 className=" mt-4 bg-white">Home // FAQ</h3>
//         </div>
//         </div>
//       {/* <div className="ml-16">
//         <h2 className="text-2xl font-semibold mb-2.5">
//           What is Arrc Technology and how does it work?
//         </h2>
//         <p>
//           Arrc Technology is a dynamic multivendor eCommerce platform that brings
//           together a diverse range of sellers and products, all under one
//           virtual roof. Whether you're looking for the latest fashion trends,
//           cutting-edge electronics, or unique home goods, you’ll find them here.
//           Each vendor on Arrc Technology manages their own store, allowing them to
//           offer a wide variety of products with different styles, prices, and
//           specialties. As a customer, you can browse through these offerings,
//           compare products, and make purchases directly from the sellers, all
//           through the Arrc Technology interface. Our platform ensures a seamless
//           shopping experience, from product discovery to payment and delivery.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           How do I create an account on Arrc Technology and what are the benefits?
//         </h2>
//         <p>
//           Creating an account on Arrc Technology is simple and offers a range of
//           benefits that enhance your shopping experience. To get started, click
//           on the "Sign Up" button located at the top right corner of our
//           homepage. You’ll be prompted to fill in some basic information, such
//           as your name, email address, and a secure password. Once you’ve
//           completed the registration, you can immediately start browsing and
//           shopping. As a registered user, you’ll enjoy features like
//           personalized recommendations, easy access to your order history, and
//           the ability to save products to your wishlist for future purchase.
//           Plus, you’ll be able to track your orders in real time and leave
//           reviews on products you’ve purchased.
//         </p>
//         <h2 className="text-2xl font-semibold mb-2.5">
//           How can I become a seller on Arrc Technology, and what are the
//           requirements?
//         </h2>
//         <p>
//           Becoming a seller on Arrc Technology is a fantastic opportunity to reach a
//           broad audience of potential customers. To join our community of
//           sellers, click on the "Sell with Us" link found on our homepage. You
//           will need to fill out a registration form with details about your
//           business, including your business name, contact information, and the
//           types of products you intend to sell. In addition, you will need to
//           submit certain documents for verification purposes, such as proof of
//           business registration and identity verification. Once your application
//           is submitted, our team will review it to ensure it meets our
//           standards. If approved, you’ll receive instructions on how to set up
//           your store and start listing products. As a seller on Arrc Technology,
//           you’ll gain access to our robust platform tools that help manage
//           inventory, process orders, and communicate with customers.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           How do I place an order on Arrc Technology, and what should I know before
//           purchasing?
//         </h2>
//         <p>
//           Placing an order on Arrc Technology is designed to be straightforward and
//           user-friendly. First, browse through our extensive catalog of
//           products, or use the search bar to find something specific. Once
//           you’ve found an item you wish to purchase, click on it to view
//           detailed information, including product descriptions, specifications,
//           and customer reviews. If you’re satisfied with the item, select any
//           necessary options (like size or color), and click "Add to Cart." You
//           can continue shopping or proceed directly to checkout. At checkout,
//           you’ll be asked to provide your shipping details and select a payment
//           method. Before completing your purchase, review your order to ensure
//           everything is correct. After placing your order, you will receive an
//           order confirmation via email, and you’ll be kept updated on its status
//           until it arrives at your doorstep.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           What payment methods does Arrc Technology accept, and are transactions
//           secure?
//         </h2>
//         <p>
//           Arrc Technology accepts a variety of payment methods to make your shopping
//           experience as convenient as possible. You can pay using major credit
//           and debit cards, such as Visa, MasterCard, and American Express. We
//           also accept payments through PayPal and other popular digital wallets.
//           For added flexibility, we offer support for several regional payment
//           methods depending on your location. All transactions on Arrc Technology
//           are secured using the latest encryption technologies, ensuring your
//           payment information is safe and confidential. We also monitor
//           transactions for any signs of fraud to protect our customers. Your
//           financial security is a top priority for us.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           Can I track my order on Arrc Technology, and how does the tracking process
//           work?
//         </h2>
//         <p>
//           Yes, Arrc Technology provides a comprehensive order tracking system to
//           keep you informed every step of the way. Once your order has been
//           processed and shipped, you will receive an email containing a tracking
//           number. This tracking number can be used to monitor the progress of
//           your delivery. Simply go to the "Track Order" section on our website,
//           enter your tracking number, and you’ll be able to see real-time
//           updates on your shipment’s location. You can also track your order
//           through your account dashboard if you’re a registered user. This
//           ensures you know exactly when to expect your package, and it provides
//           peace of mind that your order is on its way.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           What is the return policy on Arrc Technology, and how do I return a
//           product?
//         </h2>
//         <p>
//           The return policy on Arrc Technology is designed to be as fair and
//           straightforward as possible, though it may vary depending on the
//           individual seller. Generally, most products can be returned within 14
//           days of receiving your order, provided they are unused and in their
//           original packaging. To initiate a return, log in to your account, go
//           to your order history, and select the item you wish to return. Follow
//           the on-screen instructions to complete the return request, which may
//           involve printing a return label and dropping the item off at a
//           designated location. Once the return is received and inspected by the
//           seller, your refund will be processed. Please note that certain items,
//           like perishable goods or customized products, may not be eligible for
//           return. Always check the specific return policy on the product page
//           before making a purchase.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           How do I contact Arrc Technology customer support, and what kind of
//           assistance is available?
//         </h2>
//         <p>
//           If you need assistance with anything related to your Arrc Technology
//           experience, our customer support team is here to help. You can reach
//           out to us through the "Contact Us" page on our website, where you’ll
//           find a form to submit your query. Additionally, we offer live chat
//           support for immediate assistance with urgent matters. Whether you have
//           questions about a product, need help with an order, or have concerns
//           about a seller, our dedicated team is ready to provide the support you
//           need. We strive to respond to all inquiries as quickly as possible,
//           ensuring you have a smooth and satisfying shopping experience.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           Are there any shipping charges on Arrc Technology, and how are they
//           calculated?
//         </h2>
//         <p>
//           Shipping charges on Arrc Technology can vary depending on several factors,
//           including the seller, the destination of the delivery, and the size or
//           weight of the items purchased. Some sellers may offer free shipping on
//           certain products or orders above a specific amount, while others may
//           charge a nominal fee to cover shipping costs. During the checkout
//           process, you will see the total shipping cost before completing your
//           purchase, so there are no surprises. The shipping charges are
//           calculated based on real-time rates from our logistics partners,
//           ensuring that you receive the best possible service. You can also
//           choose from different shipping options, such as standard or express
//           delivery, depending on how quickly you need your items.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           How do i leave a review for a product on Arrc Technology, and why is it
//           important?
//         </h2>
//         <p>
//           Leaving a review on Arrc Technology is a great way to share your
//           experience with other shoppers and help them make informed decisions.
//           After you’ve received your purchase, you’ll receive an email inviting
//           you to leave a review. Alternatively, you can log in to your Genius
//           Shop account, go to your order history, and click on the product you
//           wish to review. On the product page, you’ll find the option to rate
//           the item and leave detailed feedback about your experience, including
//           the product’s quality, value for money, and how it met your
//           expectations. Your review is valuable not only to other shoppers but
//           also to the sellers, as it helps them improve their products and
//           services. Honest reviews contribute to a trustworthy and reliable
//           marketplace.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           How do I Know if a seller on Arrc Technology is trustworthy?
//         </h2>
//         <p>
//           At Arrc Technology, we prioritize creating a safe and reliable marketplace
//           for our customers. To ensure that our sellers meet high standards, we
//           thoroughly vet them during the registration process. Additionally,
//           each seller on our platform has a rating based on customer reviews and
//           feedback. When you view a product, you can see the seller’s rating,
//           the number of transactions they’ve completed, and read reviews from
//           previous customers. These ratings and reviews are valuable tools to
//           help you assess the trustworthiness of a seller before making a
//           purchase. If you ever have concerns about a seller, our customer
//           support team is available to assist you.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           why should I do if I receive a daamaged or defective product?
//         </h2>
//         <p>
//           If you receive a damaged or defective product, we understand how
//           frustrating that can be, and we’re here to help resolve the issue
//           quickly. First, we recommend taking photos of the damaged or defective
//           item as evidence. Then, log in to your Arrc Technology account and go to
//           your order history. Select the item in question and choose the option
//           to report an issue. You will be guided through the process of
//           submitting your claim, which includes providing details about the
//           damage or defect and uploading the photos you’ve taken. Our team will
//           review your claim and, depending on the situation, arrange for a
//           replacement, repair, or refund. We aim to make this process as smooth
//           and hassle-free as possible.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           {" "}
//           Can i cancel my order on Arrc Technology , and what are the conditions?
//         </h2>
//         <p>
//           Yes, you can cancel your order on Arrc Technology, but the ability to do
//           so depends on the status of your order. If your order has not yet been
//           processed or shipped, you can easily cancel it by logging into your
//           account, going to your order history, and selecting the "Cancel Order"
//           option next to the item you wish to cancel. If your order has already
//           been shipped, cancellation may not be possible, and you may need to
//           wait until you receive the item to initiate a return. It’s important
//           to act quickly if you wish to cancel an order, as our sellers work
//           hard to process and ship orders promptly. Please review the specific
//           cancellation policy on the product page for more details.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           Does Arrc Technology offer any promotions or discounts, and how can I find
//           them?
//         </h2>
//         <p>
//           Yes, Arrc Technology frequently offers promotions, discounts, and special
//           deals to enhance your shopping experience. You can find these
//           promotions by visiting the "Deals" or "Offers" section on our website,
//           where we regularly update the latest discounts available from various
//           sellers. Additionally, by signing up for our newsletter, you can
//           receive exclusive discount codes and be the first to know about
//           upcoming sales events. Many sellers also offer seasonal promotions or
//           discounts on specific product categories, so it’s a good idea to check
//           back often to take advantage of these savings. You can also find
//           promotional banners on the homepage that highlight ongoing deals.
//         </p>

//         <h2 className="text-2xl font-semibold mb-2.5">
//           What steps does Arrc Technology take to ensure product authenticity?
//         </h2>
//         <p>
//           Arrc Technology is committed to offering only genuine and authentic
//           products to our customers. We work closely with our sellers to ensure
//           that all items listed on our platform meet our strict quality and
//           authenticity standards. Sellers are required to provide proof of
//           authenticity for branded products, and we conduct regular audits to
//           ensure compliance. Additionally, our customer review system allows
//           shoppers to report any concerns about product authenticity. If a
//           product is found to be counterfeit, we take immediate action,
//           including removing the product from our platform and taking
//           appropriate measures against the seller. Your trust is important to
//           us, and we strive to create a marketplace where you can shop with
//           confidence.
//         </p>
//       </div> */}

//       <div className=" mx-auto p-6 space-y-6">
//         {faqs.map((faq, index) => (
//           <div key={index} className="border rounded-lg p-3">
//             {/* Question with toggle button */}
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleAnswer(index)}
//             >
//               <h3 className="text-lg font-medium">{faq.question}</h3>
//               <span className="text-xl font-bold text-black-600">
//                 {openIndex === index ? "-" : "+"}
//               </span>
//             </div>

//             {/* Answer section */}
//             {openIndex === index && (
//               <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
// }

// export default Faq;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Minus } from 'lucide-react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://ecommerce-panel-backend.onrender.com/api/faqs');
        setFaqs(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching FAQs:', err);
        setIsLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gray-600 h-[300px] flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-white text-5xl font-bold mb-4">Faq</h1>
          <div className="flex items-center gap-2 text-gray-300">
            <span>Home</span>
            <span>//</span>
            <span>Faq</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-9xl mx-auto py-16 px-4">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq._id} 
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">{faq.title}</h3>
                <span className="text-gray-500">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {faq.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;

