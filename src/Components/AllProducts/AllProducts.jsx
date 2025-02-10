import axios from "axios";
import React, { useEffect, useState } from "react";
import productImg from "../../assets/gallery/g03.jpg";

const AllProducts = () => {
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
    setShowProduct(true)

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
    <div className="mt-20">
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

      <div className="flex gap-3 flex-wrap my-6">
        <select onChange={(e) => filterProducts(e.target.value)}>
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
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex gap-4 flex-wrap justify-center">
              {products.map((item) => (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2 rounded-xl">
                  <a className="block relative rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={item.thumbnail}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Title: {item.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      Rating: {item.rating}
                    </h2>
                    <p className="mt-1">Price: ${item.price}</p>
                  </div>
                </div>

                // <div className="border-2 mb-3">
                //     <img src={item.thumbnail} alt="" />
                //     <p>Title: {item.title} </p>
                //     <p>Price: ${item.price} </p>
                //     <p>Rating: {item.rating} </p>
                // </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="flex gap-3 flex-wrap justify-center">
          {allProducts.map((allItems, index) => (
            <div key={index} className="border-2 p-4 rounded-xl bg-slate-200">
              <img
                alt="ecommerce"
                className="object-cover object-center block "
                src={allItems.thumbnail}
              />
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Title: {allItems.title}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rating: {allItems.rating}
                </h2>
                <p className="mt-1">Price: ${allItems.price}</p>
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
