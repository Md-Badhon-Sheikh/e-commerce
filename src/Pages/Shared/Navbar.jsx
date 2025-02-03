import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className="nav-link"
          activeClassName="active"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Blog"
          className="nav-link"
          activeClassName="active"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className="nav-link"
          activeClassName="active"
        >
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
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Ocean</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end flex items-center space-x-4">
          {/* Search Option (left side) */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered input-sm focus:outline-none"
            />
            <button className="btn btn-sm text-black border border-gray-300 hover:bg-transparent focus:outline-none">
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
                  d="M11 4a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zm0 14a7 7 0 007-7 7 7 0 00-7-7 7 7 0 00-7 7 7 7 0 007 7zm7 0l4 4"
                />
              </svg>
            </button>
          </div>

          {/* Login Button (right side) */}
          <NavLink
            to="/login"
            className="btn btn-sm text-black border border-gray-300 hover:bg-transparent focus:outline-none"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
