import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
    const [allCategory, setAllCategory] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const res = await axios("https://dummyjson.com/products/categories");
                // console.log("API Response:", res.data); 
                setAllCategory(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getAllProducts();
    }, []);

    return (
        <div className="mt-20">
            <h1>All Products</h1>
            <div>
                    {allCategory.length > 0 ? (
                    allCategory.map((category, index) => (
                        <div className="" key={index}>
                            <button className="border-2 px-2 py-1 rounded bg-black text-white">{category.slug} </button>
                        </div>
                        
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default AllProducts;
