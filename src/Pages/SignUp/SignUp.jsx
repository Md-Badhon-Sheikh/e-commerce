import React, { useState } from "react";
import signup from "../../assets/gallery/g03.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../FirebaseAuth/FirebaseAuth";


const SignUp = () => {
  const navigateLogin = useNavigate();
  const [userSignUp, setUserSignUp] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value)
    setUserSignUp({ ...userSignUp, [e.target.name]: e.target.value });
    // console.log(userSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userSignUp.username || !userSignUp.email || !userSignUp.password){
      return toast.error("All fields are required")
    }else{
      createUserWithEmailAndPassword( auth, userSignUp.email, userSignUp.password )
      .then(async(res) => {
        const user = res.user
        await updateProfile(user,{
          displayName: userSignUp.username
        });

        navigateLogin("/Login")

      })
      .catch((err) => toast.error(err.message))
    }
  }

  return (
    <div className="mt-20 bg-gray-200">
      <div className="relative">
        <img
          src={signup}
          alt=""
          className="object-cover w-full object-center h-[200px]"
        />
        <div className="w-full h-[200px] bg-black absolute top-0 left-0 opacity-[.4]"></div>
        <h2 className="absolute top-[50%] left-[10%] text-white font-semibold text-3xl md:text-5xl">
          Sign Up
        </h2>
      </div>

      {/* login form  */}

      <div>
        <div className="container px-5 py-20 mx-auto flex">
          <div className=" mx-auto bg-white rounded-lg p-8 flex flex-col mt-8 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-gray-900 text-3xl font-bold mb-4 title-font">
              Sing Up
            </h2>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-black font-semibold">
                Name
              </label>
              <input
                autoComplete="off"
                type="text"
                name="username"
                value={userSignUp.username}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-black font-semibold">
                Email
              </label>
              <input
                autoComplete="off"
                type="email"
                name="email"
                value={userSignUp.email}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text- text-black font-semibold">
                Password
              </label>
              <input
                autoComplete="off"
                type="password"
                name="password"
                value={userSignUp.password}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleSubmit}>
              Sing Up
            </button>
            <p className=" text-xs text-black mt-4">
              Have an Account? {""}
              <NavLink
                to="/login"
                className='cursor-pointer text-orange-600 hover:text-blue-400"'
              >
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
