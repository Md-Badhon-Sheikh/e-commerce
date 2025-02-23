import React, { useEffect, useState } from "react";
import productsData from "../../../public/allProduct.json";
import { useParams } from "react-router-dom";
import { Star } from "lucide-react";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = () => {
      const product = productsData.find(item => item.id === Number(productId));
      if (product) {
        setSingleProduct(product);
      } else {
        console.error("Product not found");
      }
    };
    fetchProduct();
  }, [productId]);

  if (!singleProduct) {
    return <div className="text-center text-gray-500">Loading product...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-slate-300 shadow-lg rounded-lg mt-24 flex flex-col md:flex-row gap-10">
      {/* Product Images */}
      <div className="md:w-1/2 flex flex-col items-center">
        <img 
          src={singleProduct.thumbnail} 
          alt={singleProduct.title} 
          className="w-full object-cover rounded-lg shadow-md border p-2 m-4"
        />
        <div className="flex gap-2 mt-4">
          {singleProduct.images?.map((img, index) => (
            <img key={index} src={img} alt="" className="w-16 h-16 object-cover border rounded-lg cursor-pointer" />
          ))}
        </div>
      </div>
      
      {/* Product Details */}
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold text-gray-800">{singleProduct.title}</h2>
        <p className="text-gray-600 my-2">{singleProduct.description}</p>
        
        <div className="flex items-center gap-2 text-yellow-500">
          <Star size={20} fill="currentColor" />
          <span className="text-gray-700 font-semibold">{singleProduct.rating} / 5</span>
        </div>
        
        <p className="text-2xl font-semibold text-gray-900 my-2">
          ৳{singleProduct.price.toFixed(2)} 
          <span className="text-red-500 text-lg ml-2">
            -{singleProduct.discountPercentage}% Off
          </span>
        </p>
        
        <div className="flex gap-4 my-4">
          <p className="text-gray-700 font-semibold">Color: </p>
          <div className="flex gap-2">
            <span className="w-6 h-6 bg-blue-500 rounded-full border cursor-pointer"></span>
            <span className="w-6 h-6 bg-black rounded-full border cursor-pointer"></span>
          </div>
        </div>
        
        <div className="flex gap-4 my-4">
          <p className="text-gray-700 font-semibold">Size: </p>
          <div className="flex gap-2">
            <button className="px-4 py-1 border rounded-lg">M</button>
            <button className="px-4 py-1 border rounded-lg">L</button>
            <button className="px-4 py-1 border rounded-lg">XL</button>
          </div>
        </div>
        
        <p className="text-sm text-gray-500">Stock: {singleProduct.stock} available</p>
        
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
