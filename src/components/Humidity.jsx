import React from "react";

const Humidity = ({ hummidity }) => {
  return (
    <div className="h-20 w-[50%] lg:w-[40%]  flex items-center justify-center">
      <p className="text-white font-bold text-bold">Humidity: {hummidity}%</p>
    </div>
  );
};

export default Humidity;
