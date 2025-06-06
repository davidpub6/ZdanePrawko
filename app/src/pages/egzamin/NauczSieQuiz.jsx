import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizLearning from '../../Data/quizLearning.json';

const NauczSieQuiz = () => {
  const navigate = useNavigate();

  // currentIndex tracks the index of the current question being displayed
  const [currentIndex, setCurrentIndex] = useState(0);

  // selectedAnswers stores the user's selected answers keyed by question index
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // showAnswer indicates whether to show the correct/incorrect feedback
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = quizLearning[currentIndex];
  const selectedAnswerId = selectedAnswers[currentIndex] || null;

  // Effect to toggle showing answer feedback when current question or selected answers change
  useEffect(() => {
    if (selectedAnswers[currentIndex]) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }, [currentIndex, selectedAnswers]);

  // Handler for selecting an answer for the current question
  const handleAnswerSelect = (answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: answerId,
    });
    setShowAnswer(true);
  };

  // Handler to go to the next question if not at the last one
  const handleNext = () => {
    if (currentIndex < quizLearning.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handler to go to the previous question if not at the first one
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Nauka - Prawo Jazdy</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        {/* Display the current question */}
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>

        {/* Display the image associated with the question */}
        <img
          src={currentQuestion.image}
          alt="Znak drogowy"
          className="mb-4 w-48 h-auto mx-auto"
        />

        {/* Render answer buttons with conditional styling based on selection and correctness */}
        <div className="flex flex-col space-y-2">
          {currentQuestion.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerSelect(answer.id)}
              disabled={showAnswer}
              className={`p-3 rounded border text-left ${
                showAnswer
                  ? answer.id === currentQuestion.correctAnswerId
                    ? 'bg-green-300 border-green-600'
                    : answer.id === selectedAnswerId
                    ? 'bg-red-300 border-red-600'
                    : 'bg-gray-100 border-gray-300'
                  : 'bg-gray-100 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {answer.text}
            </button>
          ))}
        </div>

        {/* Show feedback message if an answer has been selected */}
        {showAnswer && (
          <div className="mt-4 text-center">
            {selectedAnswerId === currentQuestion.correctAnswerId ? (
              <p className="text-green-700 font-semibold">Poprawna odpowiedź!</p>
            ) : (
              <p className="text-red-700 font-semibold">
                Niepoprawna odpowiedź. Poprawna to: {
                  currentQuestion.answers.find(a => a.id === currentQuestion.correctAnswerId).text
                }
              </p>
            )}
          </div>
        )}

        {/* Navigation buttons for previous and next questions */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Poprzednie pytanie
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === quizLearning.length - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Następne pytanie
          </button>
        </div>

        {/* Button to navigate back to the exam page */}
        <button
          onClick={() => navigate('/egzamin')}
          className="mt-6 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          Powrót do Egzaminu
        </button>
      </div>
    </div>
  );
};

export default NauczSieQuiz;
