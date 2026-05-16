import React from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Profile = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/order", {
      replace: true,
      state: {
        user: context,
      },
    });
  };

  return (
    <div>
      <h1>Welcome to Profile Page</h1>
      <h2>{context.username}</h2>
      <h2>{context.message}</h2>
      <button
        className="px-6 py-2.5 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 hover:cursor-pointer m-2"
        onClick={handleClick}
      >
        Order Now
      </button>
    </div>
  );
};

export default Profile;
