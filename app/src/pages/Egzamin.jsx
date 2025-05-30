import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TileCard from '../components/TileCard'; // lub inny komponent
import image1 from '../images/egzamin/naucz-sie-znakow.png';
import image2 from '../images/egzamin/egzamin-teoretyczny.png';

function Egzamin() {
  const navigate = useNavigate(); // Initialize navigation function
  const [wyniki, setWyniki] = useState([]); // State to store scores
  // Load scores from localStorage when the component mounts
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        setWyniki(user.wyniki || []);
      }
    }, []);

  return (
    <div className="bg-gray-100 p-6 ">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Egzamin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 p-2">
        <TileCard 
          image={image1}
          title="Naucz sie"
          description="Naucz się pytań pod egzamin teoretyczny"
          onClick={() => navigate("/egzamin/nauka")}
        />

        <TileCard 
          image={image2}
          title="Test"
          description="Sprawdź się"
          onClick={() => navigate('/egzamin/test')} // Navigate to test page
        />
        </div>

        {/* User's scores */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold mb-4">Twoje wyniki</h2>
        <ul className="list-disc pl-6">
          {wyniki.length > 0 ? (
            wyniki.map((dane, index) => (
              <li key={index} className="text-gray-700">
                <pre>
                  {dane.date} : {dane.wynik}{' '}
                </pre>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Brak wynikow.</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Egzamin;
