import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tile5() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Ogólne zasady ruchu drogowego - część 2</h1>
        <p className="text-gray-700 mb-4">
          Kolejną ważną zasadą jest przestrzeganie ograniczeń prędkości, które są ustalane w celu zapewnienia bezpieczeństwa na różnych typach dróg. Przekraczanie prędkości zwiększa ryzyko wypadków i może prowadzić do poważnych konsekwencji.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Zachowanie na skrzyżowaniach</h2>
        <p className="text-gray-700 mb-4">
          Na skrzyżowaniach należy zachować szczególną ostrożność, ustępować pierwszeństwa zgodnie z przepisami oraz zwracać uwagę na sygnalizację świetlną i znaki drogowe.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bezpieczeństwo pieszych</h2>
        <p className="text-gray-700 mb-4">
          Kierowcy powinni zawsze zwracać uwagę na pieszych, szczególnie na przejściach dla pieszych, i ustępować im pierwszeństwa. Piesi również powinni zachowywać ostrożność i korzystać z przejść zgodnie z przepisami.
        </p>
        <p className="text-gray-700 mb-4">
          Przestrzeganie tych zasad przyczynia się do poprawy bezpieczeństwa na drogach i zmniejszenia liczby wypadków.
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
          onClick={() => navigate('/nauka/dzial2/zasady-1')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Poprzedni
        </button>

        {/* Next Tile */}
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:bg-gray-200 disabled:text-gray-500"
          disabled={true} // No next tile
        >
          Następny
        </button>
      </div>
    </div>
  );
}

export default Tile5;
