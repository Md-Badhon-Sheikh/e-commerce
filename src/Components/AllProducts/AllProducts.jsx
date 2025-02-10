import axios from "axios";
import React, { useEffect, useState } from "react";
import productImg from "../../assets/gallery/g03.jpg";
import { CiStar } from "react-icons/ci";

const AllProducts = ({AddToCart}) => {
  const [allProducts, setAllProduct] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [showProduct, setShowProduct] = useState(false);

  // All products
  useEffect(() => {
    const AllProducts = async () => {
      const res = await axios("https://dummyjson.com/products");
      setAllProduct(res.data.products);
    };

    AllProducts();
  }, []);

  // All Category
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        // console.log("API Response:", res.data);
        setAllCategory(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getAllCategory();
  }, []);

  // select products

  const filterProducts = (category) => {
    setSelectProducts(category);
    setShowProduct(true);
  };

  // single product

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProducts}`
          );
          // console.log("API Response:", res.data);
          setProducts(res.data.products);
          // console.log(res.data.products);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getProducts();
  }, [selectProducts]);

  return (
    <div className="mt-20 bg-white">
      <div className="relative">
        <img
          src={productImg}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          All Products
        </h2>
      </div>

      {/* product category section  */}

      <div className="flex gap-3 flex-wrap my-10 justify-center">
        <select
          onChange={(e) => filterProducts(e.target.value)}
          className="border-2 py-1 px-2 rounded-lg bg-slate-300 font-semibold text-lg"
        >
          <option> Filter by Category</option>

          {allCategory.length > 0 ? (
            allCategory
              .filter(
                (filterItem) =>
                  !["vehicle", "tablets"].includes(filterItem.slug)
              )
              .map((category, index) => (
                <option value={category.slug}>{category.slug}</option>
              ))
          ) : (
            <p>Loading...</p>
          )}
        </select>
      </div>

      {/* product section  */}

      {showProduct ? (
        <div className="flex gap-3 flex-wrap justify-center">
         {products.map((item) => (
            <div className=" card card-compact bg-base-100 w-72 h-96 shadow-xl border rounded justify-center">
              <figure className="border m-4">
                <img src={item.thumbnail} alt="ecommerce" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-sm font-sans">
                  Title: {item.title}
                </h2>
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title text-xl text-orange-600">
                      Price: ${item.price}
                    </h2>
                    <p className="flex gap-2">
                      Rating: {item.rating} ||
                      <span className="flex text-orange-800 fill-orange-600 mt-1">
                        {" "}
                        <CiStar /> <CiStar /> <CiStar />
                        <CiStar /> <CiStar />
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary text-sm mt-3" onClick={()=> AddToCart(item)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        
        <div className="flex gap-3 flex-wrap justify-center">
          {allProducts.map((allItems, index) => (
            <div className=" card card-compact bg-base-100 w-72 h-96 shadow-xl border rounded justify-center">
              <figure className="border m-4">
                <img src={allItems.thumbnail} alt="ecommerce" />
              </figure>
              <div className="card-body ">
                <h2 className="card-title text-sm font-sans">
                  Title: {allItems.title}
                </h2>
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title text-xl text-orange-600">
                      Price: ${allItems.price}
                    </h2>
                    <p className="flex gap-2">
                      Rating: {allItems.rating} ||
                      <span className="flex text-orange-800 fill-orange-600 mt-1">
                        {" "}
                        <CiStar /> <CiStar /> <CiStar />
                        <CiStar /> <CiStar />
                      </span>
                    </p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-sm btn-primary text-sm mt-3" onClick={()=> AddToCart(allItems)}>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* all Products  */}
    </div>
  );
};

export default AllProducts;
