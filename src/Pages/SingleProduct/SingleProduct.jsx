import React, { useEffect, useState } from "react";
import productsData from "../../../public/allProduct.json";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});

  // Destructure productId from useParams
  const { productId } = useParams();
  console.log("Product ID from URL:", productId);

  useEffect(() => {
    const singleProductFetch = () => {
      // Find the product by productId
      const myData = productsData;
      // Convert productId to a number before comparison
      const product = myData.find(item => item.id === Number(productId));
      if (product) {
        setSingleProduct(product); // Set the product object, not the ID
      } else {
        console.error("Product not found");
      }
    };

    singleProductFetch();
  }, [productId]);

  // This useEffect will log the updated state whenever singleProduct changes
  useEffect(() => {
    console.log("Single Product Updated:", singleProduct);
  }, [singleProduct]);

  return (
    <div className="my-20">
      <h1>Single Product: {singleProduct.title}</h1>
      {/* Render other product details here */}
      {singleProduct && (
        <div>
          <p>Description: {singleProduct.description}</p>
          <p>Price: ${singleProduct.price}</p>
          {/* Add more product details as needed */}
        </div>
      )}
    </div>
  );
};

export default SingleProduct;