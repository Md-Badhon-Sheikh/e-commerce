import React from "react";

const Products = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4">Add Product</button>
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-4">Product Name</th>
                        <th className="px-6 py-4">Price</th>
                        <th className="px-6 py-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4">Product 1</td>
                        <td className="px-6 py-4">$100</td>
                        <td className="px-6 py-4">
                            <button className="text-red-600">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Products;
