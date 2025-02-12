import React, { useEffect, useState } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../FirebaseAuth/FirebaseAuth';

const Root = () => {
    const [cart, setCart] = useState([]);
    const [userName, setUserName] = useState("")

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
    // Handle remove 
    const handleRemove = (id) => {
       const updateByFilter = cart.filter((filterItem)=> filterItem.id !== id )
       setCart (updateByFilter);
    }

    // userName display 

    useEffect(() => {
        auth.onAuthStateChanged(( user) =>{
            if(user){
                setUserName(user.displayName);
            }else{
                setUserName("")
            }
        });
    },[]);

    return (
        <div>
            <Navbar cart = {cart} userName = {userName} />
            <Outlet context={{ cart, addToCart, handleInc, handleDec, handleRemove }} />
            <Toaster></Toaster>
            <Footer />
        </div>
    );
};

export default Root;
