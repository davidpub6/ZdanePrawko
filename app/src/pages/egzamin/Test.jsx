import React, { useState, useEffect } from "react";
import Question from "../../components/Question";
import { useNavigate } from 'react-router-dom';
import quizData from "../../Data/quiz.json";

function TestProbny() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [wyniki, setWynik] = useState([]); // State to store scores

  // Load rides from localStorage when the component mounts
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setWynik(user.wyniki || []);
      }
    }, []);

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

  const handleSaveWynik = () => {
    const user = JSON.parse(localStorage.getItem('user')); //zalogowany user
    if (!user) {
      console.error('Brak zalogowanego użytkownika!');
      return;
    }
    // Add the new score
    const updatedWyniki = [...wyniki, {date: new Date().toLocaleDateString(), wynik: score + "/" + quizData.length}];
    const updatedUser = { ...user, wyniki: updatedWyniki };
    // Save the updated user to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setWynik(updatedWyniki); // Update the state
  };

  const handleReset = () => {
    handleSaveWynik(); // Save the score before resetting
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
              onClick={() => {
                handleSaveWynik();
                navigate('/egzamin');
              }}
            >
              Powrót do egzaminu
          </button>
        </div>
      )}
    </div>
  );
}

export default TestProbny;
