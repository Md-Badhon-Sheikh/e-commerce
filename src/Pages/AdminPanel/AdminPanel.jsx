import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faTachometerAlt, faBox, faUsers, faShoppingCart, faCog } from "@fortawesome/free-solid-svg-icons";
import Products from "../../Components/Dashboard/Dashboard";
import Orders from "../../Components/Orders/Orders";
import Users from "../../Components/Users/Users";
import Settings from "../../Components/Settings/Settings";

const AdminPanel = () => {
    const [selectedOption, setSelectedOption] = useState("Dashboard");

    const menuItems = [
        { name: "Dashboard", icon: faTachometerAlt },
        { name: "Products", icon: faBox },
        { name: "Orders", icon: faShoppingCart },
        { name: "Users", icon: faUsers },
        { name: "Settings", icon: faCog },
    ];

    const renderContent = () => {
        switch (selectedOption) {
            case "Dashboard":
                return <Products />;  // Replace with your actual dashboard component
            case "Products":
                return <Products />;
            case "Orders":
                return <Orders />;
            case "Users":
                return <Users />;
            case "Settings":
                return <Settings />;
            default:
                return <div>Welcome to the Admin Panel</div>;
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100 mt-20">
            {/* Sidebar */}
            <div className="w-64 bg-white p-6 shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-8">Admin Panel</h2>
                <ul>
                    {menuItems.map((item) => (
                        <li
                            key={item.name}
                            className={`flex items-center p-4 rounded-md mb-4 cursor-pointer ${selectedOption === item.name ? "bg-blue-600 text-white" : "text-gray-700"
                                }`}
                            onClick={() => setSelectedOption(item.name)}
                        >
                            <FontAwesomeIcon icon={item.icon} className="mr-3" />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPanel;
