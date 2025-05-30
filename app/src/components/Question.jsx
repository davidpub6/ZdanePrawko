import React from "react";

function Question({ question, options, onAnswer, correctAnswer }) {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <p className="text-lg font-semibold mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={ () => onAnswer(option) }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;