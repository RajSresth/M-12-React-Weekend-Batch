import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import {useNavigate} from "react-router-dom"

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-30  w-full h-25 bg-white shadow shadow-gray-300">
      <div className="max-w-300 m-auto h-25 flex items-center">
        {/* Logo */}
        <div className="shrink-0">
          <img
            className="h-18 w-auto object-contain"
            src="https://theindianhome.in/assets/logo1-Cc5dNI5m.png"
            alt=""
          />
        </div>

        {/* Search Bar */}
        <div className="grow py-3 px-20">
          <div className="max-w-180 mx-auto relative flex items-center rounded-xl border-2 border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <CiSearch size={22} className="text-gray-500 absolute left-2" />
            <input
              type="text"
              className="w-full py-2 px-10 outline-none"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="shrink-0 flex gap-5 items-center">
          <div>
            <BsCart4 size={24} />
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 overflow-hidden cursor-pointer">
            <img
              className="object-contain"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-concept-default-avatar-profile-icon-vector-social-media-user-photo-284650485.jpg"
              alt=""
            />
          </div>
          <button
            type="button"
            onClick={() => navigate("/register", {replace:true})}
            className="py-2 px-6 cursor-pointer text-sm rounded-md  bg-gray-700 text-white font-semibold hover:bg-gray-950"
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
