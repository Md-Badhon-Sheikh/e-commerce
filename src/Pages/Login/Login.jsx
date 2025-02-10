import React from "react";
import login from "../../assets/gallery/g03.jpg";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="mt-20 bg-gray-200">
      <div className="relative">
        <img
          src={login}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          Login
        </h2>
      </div>

      {/* login form  */}

      <div>
        <div className="container px-5 py-20 mx-auto flex">
          <div className=" mx-auto bg-white rounded-lg p-8 flex flex-col mt-8 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-3xl font-bold mb-4 title-font">
              Login
            </h2>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text- text-black font-semibold">
                Password
              </label>
              <input
                type="password"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Login
            </button>
            <p className=" text-xs text-black mt-4">
              Don't Have an Account? {''}
              <NavLink to='/SingUp' className='cursor-pointer text-orange-600 hover:text-blue-400'>
                 Sign Up
              </NavLink>
             
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
