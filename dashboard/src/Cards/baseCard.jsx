import React from "react";

export const BaseCard   = ({ value, label, sub }) => {
  return (
    <div className="
      w-full
      bg-[#0b1220]
      border border-white/5
      rounded-2xl
      p-6
      flex flex-col gap-2
      shadow-[0_0_20px_rgba(0,0,0,0.4)]
      hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
      transition-all duration-300
    ">
      
      <h1 className="text-3xl font-semibold text-[#facc15]">
        {value}
      </h1>

      <p className="text-sm tracking-wide text-gray-300">
        {label}
      </p>

      <span className="text-xs text-gray-500">
        {sub}
      </span>

    </div>
  );
};