import React from 'react';
import { useNavigate } from 'react-router-dom';

function ZOstrzegawcze() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Znaki Ostrzegawcze</h1>
        <p className="text-gray-700 mb-4">
          Znaki ostrzegawcze są niezwykle ważnym elementem bezpieczeństwa na drodze. Informują kierowców o potencjalnych zagrożeniach i wymagają zwiększonej uwagi oraz ostrożności.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co to są znaki ostrzegawcze?</h2>
        <p className="text-gray-700 mb-4">
          Znaki ostrzegawcze to trójkątne znaki drogowe z czerwoną obwódką, które ostrzegają o niebezpieczeństwach na drodze, takich jak zakręty, skrzyżowania, czy przejścia dla pieszych.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Przykłady znaków ostrzegawczych</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Znak A-1:</strong> Niebezpieczny zakręt w prawo.</li>
          <li><strong>Znak A-2:</strong> Niebezpieczny zakręt w lewo.</li>
          <li><strong>Znak A-7:</strong> Skrzyżowanie z drogą podporządkowaną.</li>
          <li><strong>Znak A-17:</strong> Przejście dla pieszych.</li>
          <li><strong>Znak A-18a:</strong> Uwaga na dzieci.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Dlaczego są ważne?</h2>
        <p className="text-gray-700 mb-4">
          Znaki ostrzegawcze pomagają kierowcom przygotować się na potencjalne zagrożenia, co pozwala uniknąć wypadków i zwiększa bezpieczeństwo wszystkich uczestników ruchu drogowego.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co dalej?</h2>
        <p className="text-gray-700">
          Po zapoznaniu się z tym materiałem, przejdź do kolejnej sekcji, aby dowiedzieć się więcej o znakach zakazu i ich znaczeniu w ruchu drogowym.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {/* Back to Nauka Section */}
        <button
          onClick={() => navigate('/nauka')}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
        >
          Wróć do Nauka
        </button>

        {/* Previous Tile */}
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 disabled:bg-gray-200 disabled:text-gray-500"
          disabled={true} // Disable if there is no previous tile
        >
          Poprzedni
        </button>

        {/* Next Tile */}
        <button
          onClick={() => navigate('/nauka/dzial1/zakazu')} // Replace with the actual next tile route if it exists
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-200 disabled:text-gray-500"
        >
          Następny
        </button>
      </div>
    </div>
  );
}

export default ZOstrzegawcze;