import React from "react";

const Card = ({ category, title, oldPrice, price, image }) => {
  const shortTitle =
    title.split(" ").length > 8
      ? title.split(" ").slice(0, 8).join(" ") + "..."
      : title;

  const discount = Math.round(((oldPrice - price) / oldPrice) * 100);

  return (
    <div className="group w-60 rounded-2xl bg-white border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      
      {/* Image Section */}
      <div className="relative h-50 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src={image[0]}
          alt={title}
          className="w-full h-full object-cover p-3 transition-transform duration-300 group-hover:scale-105"
        />
        {discount > 0 && (
          <span className="absolute top-2.5 left-2.5 bg-gray-900 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
            {discount}% OFF
          </span>
        )}
        <button className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-400 hover:border-red-200 transition-all duration-200">
          ♡
        </button>
      </div>

      {/* Info Section */}
      <div className="px-4 pt-3.5 pb-4">
        <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest mb-1.5">
          {category}
        </p>
        <h3
          className="text-[15px] font-semibold text-gray-800 leading-snug mb-3"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          {shortTitle}
        </h3>

        <div className="h-px bg-gray-100 mb-3" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] font-bold text-gray-900">
              ₹{price.toLocaleString()}
            </span>
            <span className="text-[13px] text-gray-400 line-through">
              ₹{oldPrice.toLocaleString()}
            </span>
          </div>
          <button className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200 shrink-0">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;