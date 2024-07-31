import React from "react";

const Cuaca = ({ icon, text, name }) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <h5 className="text-white font-bold text-lg">{name}</h5>
      <img src={icon} alt="weather icon" className="size-32" />
      <h5 className="text-white font-bold mt-0">{text}</h5>
    </div>
  );
};

export default Cuaca;
