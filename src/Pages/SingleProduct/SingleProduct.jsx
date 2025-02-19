import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
 const [singleProduct, setSingleProduct] = useState(null)

  const { productId } = useParams();
//   console.log(productId);

  useEffect(() => {
    const singleProductFetch = async () => {
      const res = await axios(`allProduct.json/${productId}`);
    //   setSingleProduct(res.data.products);
    console.log(res);
    };

    singleProductFetch();
  }, [productId]);

  return (
    <div className="my-20">
      <h1>Single Product: </h1>
    </div>
  );
};

export default SingleProduct;
