//import React, { useState, useEffect } from 'react';
import Question from '../../components/Question';

function TestProbny() {
    /*
  const [wyniki, setWyniki] = useState([]); // State to store scores
  // Load scores from localStorage when the component mounts
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setWyniki(user.wyniki || []);
      }
    }, []);
*/
  return (
    <div className="bg-gray-100 p-6 ">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Egzamin</h1>
      <div className="mb-8 p-2">
        <Question
          image="/images/jazda1.jpg"
          question="Odpowiedz na to pytanie to tak?"
          answer="Tak"
          />
      </div>
    </div>
  );
}

export default TestProbny;