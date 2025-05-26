import React, { useState } from "react";
import Question from "../../components/Question";
import { useNavigate } from 'react-router-dom';
import quizData from "../../Data/quiz.json";

function TestProbny() {
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  // Map the correct answer letter to its actual value
  const correctAnswerValue = currentQuestion[currentQuestion.answer];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === correctAnswerValue) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-left mb-8">Egzamin</h1>
      {!showResults ? (
        <Question
          question={currentQuestion.question}
          options={[currentQuestion.a, currentQuestion.b, currentQuestion.c, currentQuestion.d]}
          onAnswer={handleAnswer}
          correctAnswer={correctAnswerValue}
        />
      ) : (
        <div className="bg-white shadow-md rounded p-4">
          <h2 className="text-xl font-bold mb-4">Wynik końcowy</h2>
          <p className="text-lg">
            Twój wynik: {score} / {quizData.length}
          </p>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleReset}
          >
            Rozpocznij ponownie
          </button>

          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => navigate('/egzamin')}
            >
              Powrót do egzaminu
          </button>
        </div>
      )}
    </div>
  );
}

export default TestProbny;
