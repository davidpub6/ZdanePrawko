import React from "react";

function Question ({ image, question, answer}) {
  return (
    <div>
      <img src={image} alt={" "} className="w-full h-40 object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-600">{question}</p>
        <p>
            <button className="bg-green-500 text-white px-4 py-2 rounded"> Tak </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded"> Nie </button>
        </p>
      </div>
    </div>
  );
}

export default Question;