import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = ({ cart, userName }) => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/AllProducts" className="nav-link">
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/About" className="nav-link">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className="nav-link">
          Contact
        </NavLink>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setScrollingUp(false);
      } else {
        // Scrolling up
        setScrollingUp(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <div
        className={`navbar fixed top-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm transition-transform ${
          scrollingUp ? "transform-none" : "-translate-y-full"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <NavLink to="/" className="nav-link text-2xl md:lg font-bold pl-4">
            Ocean
            <span className="text-orange-600">Shop</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center space-x-4 ">
          {/* Search Option (left side) */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered input-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Login Button (right side) */}
          <NavLink
            to="/Login"
            className="btn btn-sm text-black border border-gray-300 hover:bg-transparent focus:outline-none"
          >
            Login
          </NavLink>
          <span>{userName}</span>
          <NavLink to="/cart" className="relative text-black">
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
            <TiShoppingCart size={30} className="relative" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
