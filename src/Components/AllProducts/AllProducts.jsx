import React, { useEffect, useState } from "react";
import axios from "axios";
import productImg from "../../assets/gallery/g03.jpg";
import { CiStar } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { NavLink, useOutletContext } from "react-router-dom"; // Import to access context

const AllProducts = () => {
  const { addToCart } = useOutletContext(); // Access addToCart function from Root.js context
  const [allProducts, setAllProduct] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState("");
  const [showProduct, setShowProduct] = useState(false);
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch all products
  useEffect(() => {
    const AllProducts = async () => {
      const res = await fetch('/allProduct.json');
      const data = await res.json();
      setAllProduct(data)
    };

    AllProducts();
  }, []);

  // Fetch all categories
  useEffect(() => {
    const getAllCategory = async () => {
      try {
        const res = await axios("https://dummyjson.com/products/categories");
        setAllCategory(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getAllCategory();
  }, []);

  // Filter products by category
  const filterProducts = (category) => {
    setSelectProducts(category);
    setShowProduct(true);
  };

  // Fetch products by selected category
  useEffect(() => {
    const getProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(
            `https://dummyjson.com/products/category/${selectProducts}`
          );
          setProducts(res.data.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [selectProducts]);

  // search products

  const handleSearchBtn = () => {
    const searchProduct = allProducts.filter((searchFilterItem) =>
      searchFilterItem.title
        .toLowerCase()
        .includes(searchItem.toLocaleLowerCase())
    );

    setAllProduct(searchProduct);
  };

  // price filter

  const handlePrice = () => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);
    const filterPrice = allProducts.filter(
      (priceItem) =>
        (!min || priceItem.price >= min) && (!max || priceItem.price <= max)
    );

    setAllProduct(filterPrice);
  };

  return (
    <div className="mt-20 my-20 bg-white">
      {/* Banner section */}
      <div className="relative">
        <img
          src={productImg}
          alt="Products"
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          All Products
        </h2>
      </div>
      {/* search section  */}
      <div className=" w-[1250px] bg-slate-200 py-1 my-9 mx-auto rounded-xl">
        {/* Product filter by category */}
        <div className="text-center my-4">
          <select
            onChange={(e) => filterProducts(e.target.value)}
            className="border-2 py-2 px-3 rounded-lg bg-slate-300 font-semibold text-lg"
          >
            <option>Filter by Category</option>
            {allCategory.length > 0 ? (
              allCategory
                .filter(
                  (filterItem) =>
                    !["vehicle", "tablets"].includes(filterItem.slug)
                )
                .map((category) => (
                  <option key={category.slug} value={category.slug}>
                    {category.slug}
                  </option>
                ))
            ) : (
              <option>Loading...</option>
            )}
          </select>
        </div>

        {/* search product  */}

        <div className="text-center ml-8 my-3 text-lg flex justify-center">
          <input
            type="text"
            placeholder="Search Item"
            className="border-2 px-9 py-[6px] rounded-xl w-2/4"
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
          />
          <button className="text-4xl ml-3" onClick={handleSearchBtn}>
            <FaSearch />
          </button>
        </div>

        {/* product filter by price  */}

        <div className="text-center my-6 text-lg flex justify-center gap-3">
          <input
            type="text"
            placeholder="Min Price"
            className="border-2 px-4 py-1 rounded-lg w-52"
            onChange={(e) => setMinPrice(e.target.value)}
            value={minPrice}
          />

          <input
            type="text"
            placeholder="Max Price"
            className="border-2 px-4 py-1 rounded-lg w-52"
            onChange={(e) => setMaxPrice(e.target.value)}
            value={maxPrice}
          />

          <button
            className="text-lg bg-black text-white px-2 py-1 rounded-lg"
            onClick={handlePrice}
          >
            Filter by price
          </button>
        </div>
      </div>

      {/* Product display section */}

      <div className="flex gap-3 flex-wrap justify-center">
        {showProduct
          ? products.map((item) => (
              <div
                key={item.id}
                className="card card-compact bg-base-100 w-72 h-96 shadow-xl border rounded"
              >
                <NavLink to={`/SingleProduct/${item.id}`}>
                  <figure className="border m-4">
                    <img src={item.thumbnail} alt={item.title} />
                  </figure>
                </NavLink>
                <div className="card-body -mt-3">
                  <h2 className="card-title text-sm">{item.title}</h2>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-xl text-orange-600">
                        Price: ${item.price}
                      </h2>
                      <p className="flex gap-2">
                        Rating: {item.rating} ||{" "}
                        <span className="flex text-orange-800 mt-1">
                          <CiStar /> <CiStar /> <CiStar />
                          <CiStar /> <CiStar />
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        className="px-2 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
            : allProducts?.length > 0
            ? allProducts.map((item) => (
              <div
                key={item.id}
                className="card card-compact bg-base-100 w-72 h-96 mb-4 shadow-xl border rounded"
              >
                <NavLink to={`/SingleProduct/${item.id}`}>
                  <figure className="border m-4">
                    <img src={item.thumbnail} alt={item.title} />
                  </figure>
                </NavLink>

                <div className="card-body -mt-3">
                  <h2 className="card-title text-sm">{item.title}</h2>
                  <div className="flex justify-between">
                    <div>
                      <h2 className="card-title text-xl text-orange-600">
                        Price: ${item.price}
                      </h2>
                      <p className="flex gap-2">
                        Rating: {item.rating} ||{" "}
                        <span className="flex text-orange-800 mt-1">
                          <CiStar /> <CiStar /> <CiStar />
                          <CiStar /> <CiStar />
                        </span>
                      </p>
                    </div>
                    <div className="card-actions justify-end">
                      <button
                        className="px-2 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"
                        onClick={() => addToCart(item)}
                      >
                         Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
             ))
             : <div>No products available</div>}
      </div>
    </div>
  );
};

export default AllProducts;
