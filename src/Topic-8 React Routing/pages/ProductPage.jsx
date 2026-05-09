// ProductPage.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom"

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("")

  const params = useParams()

  console.log("params:",params);

  useEffect(() => {

    const fetchProductData = async () => {
    try {
      setLoading(true);
      // Replace with your actual API endpoint
      const {data} = await axios.get('https://api.theindianhome.in/api/product/list');
      
      const product = data?.products.find(singleProduct=> singleProduct._id === params?.id );
      
      console.log("product:",product);
      setProduct(product);
      setError(null);
    } catch (err) {
      console.error('API Error:', err.response.data);
      setError(err.message);
     
     
    } finally {
      setLoading(false);
    }
  };

    fetchProductData();
  }, []);

 
  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  // Error State
  if (error && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={fetchProductData}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">

      {/* Main Product Section - Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        
        {/* Product Images */}
        <div className="space-y-4">
          <div className="bg-gray-100 rounded-xl overflow-hidden">
            <img 
              src={image || product.image[0]} 
              alt={product.name}
              className="w-full h-auto object-cover hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex gap-4">
            {product.image.map((imgSrc, idx) => (
              <div key={idx} className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-500 transition"
                onClick={() => setImage(imgSrc)}
              >
                <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-tight">
            {product.title  }
          </h1>
          
          {/* Pack and Color Badges */}
          <div className="flex gap-3">
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{product.category}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400">
              {'★'.repeat(product.rating)}
              {'☆'.repeat(5 - product.rating)}
            </div>
            <span className="text-sm text-gray-500">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="text-2xl text-gray-400 line-through">Rs. {product.oldPrice}</span>
              <span className="text-3xl font-bold text-orange-500">Rs. {product.price}</span>
            </div>
            <p className="text-xs text-gray-500">Tax included. Shipping calculated at checkout.</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                -
              </button>
              <span className="w-12 text-center font-medium">0</span>
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                +
              </button>
            </div>
            <span className="text-sm text-green-600">
              {product.stock > 0 ? `✓ In stock (${product.stock} available)` : 'Out of stock'}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button 
              className="flex-1 bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
            >
              Add To Cart
            </button>
            <button
              className="flex-1 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="border-t border-gray-200 pt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Features List 
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-3">Key Features</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-gray-600">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>*/}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2024 THE INDIAN HOME. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductPage;