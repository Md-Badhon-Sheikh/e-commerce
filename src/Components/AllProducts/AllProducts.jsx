import React, { useEffect, useState } from "react";
import axios from "axios";
import productImg from "../../assets/gallery/g03.jpg";
import { CiStar } from "react-icons/ci";
import { useOutletContext } from 'react-router-dom'; // Import to access context

const AllProducts = () => {
    const { addToCart } = useOutletContext(); // Access addToCart function from Root.js context
    const [allProducts, setAllProduct] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectProducts, setSelectProducts] = useState("");
    const [showProduct, setShowProduct] = useState(false);

    // Fetch all products
    useEffect(() => {
        const AllProducts = async () => {
            const res = await axios("https://dummyjson.com/products");
            setAllProduct(res.data.products);
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

    return (
        <div className="mt-20 bg-white">
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

            {/* Product filter by category */}
            <div className="flex gap-3 flex-wrap my-10 justify-center">
                <select
                    onChange={(e) => filterProducts(e.target.value)}
                    className="border-2 py-1 px-2 rounded-lg bg-slate-300 font-semibold text-lg"
                >
                    <option>Filter by Category</option>
                    {allCategory.length > 0 ? (
                        allCategory
                            .filter((filterItem) => !["vehicle", "tablets"].includes(filterItem.slug))
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

            {/* Product display section */}
            <div className="flex gap-3 flex-wrap justify-center">
                {showProduct ? (
                    products.map((item) => (
                        <div key={item.id} className="card card-compact bg-base-100 w-72 h-96 shadow-xl border rounded">
                            <figure className="border m-4">
                                <img src={item.thumbnail} alt={item.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-sm">{item.title}</h2>
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="card-title text-xl text-orange-600">Price: ${item.price}</h2>
                                        <p className="flex gap-2">
                                            Rating: {item.rating} ||{" "}
                                            <span className="flex text-orange-800 mt-1">
                                                <CiStar /> <CiStar /> <CiStar />
                                                <CiStar /> <CiStar />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-primary text-sm mt-3" onClick={() => addToCart(item)}>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    allProducts.map((item) => (
                        <div key={item.id} className="card card-compact bg-base-100 w-72 h-96 shadow-xl border rounded">
                            <figure className="border m-4">
                                <img src={item.thumbnail} alt={item.title} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-sm">{item.title}</h2>
                                <div className="flex justify-between">
                                    <div>
                                        <h2 className="card-title text-xl text-orange-600">Price: ${item.price}</h2>
                                        <p className="flex gap-2">
                                            Rating: {item.rating} ||{" "}
                                            <span className="flex text-orange-800 mt-1">
                                                <CiStar /> <CiStar /> <CiStar />
                                                <CiStar /> <CiStar />
                                            </span>
                                        </p>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-primary text-sm mt-3" onClick={() => addToCart(item)}>
                                            Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AllProducts;
