import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(44)
        .fill("")
        .map((_, index) => (
          <div key={index} className="grey-box"></div>
        ))}
    </div>
  );
};

export default Shimmer;
