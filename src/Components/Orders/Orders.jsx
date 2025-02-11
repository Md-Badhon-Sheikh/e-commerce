import React from "react";

const Orders = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h2>
            <table className="min-w-full bg-white shadow-md rounded-md">
                <thead>
                    <tr>
                        <th className="px-6 py-4">Order ID</th>
                        <th className="px-6 py-4">Customer</th>
                        <th className="px-6 py-4">Total</th>
                        <th className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-6 py-4">#12345</td>
                        <td className="px-6 py-4">John Doe</td>
                        <td className="px-6 py-4">$150</td>
                        <td className="px-6 py-4">Pending</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
