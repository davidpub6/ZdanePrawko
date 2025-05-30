import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tile4() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Ogólne zasady ruchu drogowego - część 1</h1>
        <p className="text-gray-700 mb-4">
          Ruch drogowy opiera się na przestrzeganiu określonych zasad, które mają na celu zapewnienie bezpieczeństwa wszystkim uczestnikom ruchu. Podstawową zasadą jest zachowanie ostrożności i dostosowanie prędkości do warunków panujących na drodze.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Podstawowe zasady</h2>
        <p className="text-gray-700 mb-4">
          Kierowcy powinni zawsze ustępować pierwszeństwa pieszym na przejściach oraz zachować szczególną ostrożność w rejonach szkół i przedszkoli. Ważne jest również przestrzeganie sygnalizacji świetlnej oraz znaków drogowych.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Bezpieczna odległość</h2>
        <p className="text-gray-700 mb-4">
          Zachowanie odpowiedniej odległości od pojazdu poprzedzającego pozwala na bezpieczne reagowanie w sytuacjach awaryjnych i zapobiega kolizjom.
        </p>
        <p className="text-gray-700 mb-4">
          Pamiętaj, że przestrzeganie tych zasad wpływa na bezpieczeństwo wszystkich uczestników ruchu drogowego.
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
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:bg-gray-200 disabled:text-gray-500"
          disabled={true} // No previous tile
        >
          Poprzedni
        </button>

        {/* Next Tile */}
        <button
          onClick={() => navigate('/nauka/dzial2/zasady-2')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Następny
        </button>
      </div>
    </div>
  );
}

export default Tile4;
