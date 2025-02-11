import React from "react";

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h2>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Sales</h3>
                    <p>$10,000</p>
                </div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Orders</h3>
                    <p>150</p>
                </div>
                <div className="bg-white shadow-lg p-4 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Customers</h3>
                    <p>200</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
