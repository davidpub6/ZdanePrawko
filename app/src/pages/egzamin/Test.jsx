import React, { useState, useEffect } from "react";
import Question from "../../components/Question";
import { useNavigate } from 'react-router-dom';
import quizDataOriginal from "../../Data/quiz.json";

/* Helper function to shuffle an array randomly. */
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

  // quizData holds the shuffled quiz questions
  const [quizData, setQuizData] = useState([]);

  // currentQuestionIndex tracks the current question number
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // score tracks the number of correct answers
  const [score, setScore] = useState(0);

  // showResults indicates whether to display the final results
  const [showResults, setShowResults] = useState(false);

  // wyniki stores the user's past scores loaded from localStorage
  const [wyniki, setWynik] = useState([]);

  // Load user scores from localStorage on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setWynik(user.wyniki || []);
    }
  }, []);

  // Shuffle quiz questions on component mount
  useEffect(() => {
    setQuizData(shuffleArray(quizDataOriginal));
  }, []);

  const currentQuestion = quizData[currentQuestionIndex];

  // Shuffle answer options for the current question
  const options = currentQuestion ? shuffleArray([
    { key: 'a', value: currentQuestion.a },
    { key: 'b', value: currentQuestion.b },
    { key: 'c', value: currentQuestion.c },
    { key: 'd', value: currentQuestion.d },
  ]) : [];

  // Get the correct answer value for the current question
  const correctAnswerValue = currentQuestion ? currentQuestion[currentQuestion.answer] : null;

  // Handle user answer selection
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

  // Save the current score to localStorage under the logged-in user
  const handleSaveWynik = () => {
    const user = JSON.parse(localStorage.getItem('user')); // logged-in user
    if (!user) {
      console.error('Brak zalogowanego użytkownika!');
      return;
    }
    // Add the new score to the user's scores
    const updatedWyniki = [...wyniki, {date: new Date().toLocaleDateString(), wynik: score + "/" + quizData.length}];
    const updatedUser = { ...user, wyniki: updatedWyniki };
    // Save the updated user data back to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setWynik(updatedWyniki); // Update the state
  };

  // Reset the quiz to start over and save the current score
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
        // Render the current question component
        <Question
          question={currentQuestion.question}
          options={options.map(option => option.value)}
          onAnswer={handleAnswer}
          correctAnswer={correctAnswerValue}
        />
      ) : (
        // Show final results and options to restart or go back
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
