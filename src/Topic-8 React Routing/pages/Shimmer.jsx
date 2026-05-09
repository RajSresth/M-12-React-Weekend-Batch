import React from "react";

const Shimmer = () => {
  return (
    <div className="max-w-300 h-auto p-10 flex items-center justify-center flex-row flex-wrap gap-10 mx-auto ">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="w-60 h-70 bg-gray-200 rounded-md"></div>
        ))}
    </div>
  );
};

export default Shimmer;
