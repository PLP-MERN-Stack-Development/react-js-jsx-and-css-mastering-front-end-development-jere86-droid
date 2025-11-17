import React from "react";

const Card = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      {children}
    </div>
  );
};

export default Card;
