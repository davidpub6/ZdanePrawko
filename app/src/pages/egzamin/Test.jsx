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
  const [wyniki, setWynik] = useState([]); // State to store scores

  // Load rides from localStorage when the component mounts
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setWynik(user.wyniki || []);
      }
    }, []);

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
    setQuizData(shuffleArray(quizDataOriginal));
    handleSaveWynik(); // Save the score before resetting
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
