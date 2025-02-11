import React, { useState } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
    const [cart, setCart] = useState([]);

    // Add to cart function
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);

            if (existingProduct) {
                // Update the quantity if the product already exists in the cart
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add new product to the cart
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Increase product quantity
    const handleInc = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease product quantity, but make sure it doesn't go below 1
    const handleDec = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div>
            <Navbar />
            <Outlet context={{ cart, addToCart, handleInc, handleDec }} />
            <Footer />
        </div>
    );
};

export default Root;
