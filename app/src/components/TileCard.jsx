import React from "react";

function TileCard({ image, title, description, onClick, className}) {
  return (
    <div 
      onClick={onClick}
      className={`${className} cursor-pointer rounded-xl overflow-hidden shadow-md transition hover:scale-105 flex-shrink-0`}
    >
      <img src={image} alt={" "} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default TileCard;