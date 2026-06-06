import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart4 } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items)


  const handleClick = ({isActive}) => {
    return  isActive ? {
      color: "red",
      textDecoration: "2px underline red",
      textUnderlineOffset: "10px"
    } : {
      color: "black",
      textDecoration: "none"
    }
  }

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
        <div className="grow py-3 gap-10 flex items-center justify-center px-20">
          <div className="flex gap-6">
            <NavLink to="/" className="px-2.5 py-2" style={handleClick}>
              Home
            </NavLink>
            <NavLink to="/profile" className="px-2.5 py-2" style={handleClick}>
              Profile
            </NavLink>
            <NavLink to="/order" className="px-2.5 py-2" style={handleClick}>
              Order
            </NavLink>
            <NavLink to="/shop" className="px-2.5 py-2" style={handleClick}>
              Shop
            </NavLink>
          </div>
          <div className="relative grow flex items-center rounded-xl border-2 border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
            <CiSearch size={22} className="text-gray-500 absolute left-2" />
            <input
              type="text"
              className="py-2 px-10 outline-none"
              placeholder="Search here..."
            />
          </div>
        </div>
        <div className="shrink-0 flex gap-7 items-center">
          <div className="relative mr-4 hover:cursor-pointer" onClick={() => navigate("/cart")}>
            <BsCart4 size={24} />
            {
              cartItems.length > 0 && <div className="h-7 w-7 rounded-full bg-gray-300 flex items-center justify-center text-sm absolute -top-4 -right-6">{cartItems.length}</div>
            }
          </div>
          <div className="w-10 h-10 rounded-full border-2 border-gray-300 overflow-hidden cursor-pointer">
            <img
              className="object-contain"
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-concept-default-avatar-profile-icon-vector-social-media-user-photo-284650485.jpg"
              alt=""
            />
          </div>
          <button
            type="button"
            onClick={() => navigate("/register", { replace: true })}
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
