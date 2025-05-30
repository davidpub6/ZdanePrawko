import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizLearning from '../../Data/quizLearning.json';

const NauczSieQuiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = quizLearning[currentIndex];
  const selectedAnswerId = selectedAnswers[currentIndex] || null;

  useEffect(() => {
    if (selectedAnswers[currentIndex]) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  }, [currentIndex, selectedAnswers]);

  const handleAnswerSelect = (answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: answerId,
    });
    setShowAnswer(true);
  };

  const handleNext = () => {
    if (currentIndex < quizLearning.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Nauka - Prawo Jazdy</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4">{currentQuestion.question}</h2>
        <img
          src={currentQuestion.image}
          alt="Znak drogowy"
          className="mb-4 w-48 h-auto mx-auto"
        />
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
