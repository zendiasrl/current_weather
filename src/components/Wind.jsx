import React from "react";

const Wind = ({ wind }) => {
  return (
    <div className="h-20 w-[40%]  flex items-center justify-center">
      <p className="text-white font-bold text-base">Wind: {wind}%</p>
    </div>
  );
};

export default Wind;
