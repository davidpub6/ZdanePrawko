import React, { useState, useEffect } from "react";
import Question from "../../components/Question";
import { useNavigate } from 'react-router-dom';
import quizDataOriginal from "../../Data/quiz.json";

function shuffleArray(array) {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function TestProbny() {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setQuizData(shuffleArray(quizDataOriginal));
  }, []);

  const currentQuestion = quizData[currentQuestionIndex];

  const options = currentQuestion ? shuffleArray([
    { key: 'a', value: currentQuestion.a },
    { key: 'b', value: currentQuestion.b },
    { key: 'c', value: currentQuestion.c },
    { key: 'd', value: currentQuestion.d },
  ]) : [];

  const correctAnswerValue = currentQuestion ? currentQuestion[currentQuestion.answer] : null;

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
    setQuizData(shuffleArray(quizDataOriginal));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-2xl font-bold text-left mb-8">Egzamin</h1>
      {!showResults && currentQuestion ? (
        <Question
          question={currentQuestion.question}
          options={options.map(option => option.value)}
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
