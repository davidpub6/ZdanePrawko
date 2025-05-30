import React from 'react';
import { useNavigate } from 'react-router-dom';

function ZNakazu() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Znaki Nakazu</h1>
        <p className="text-gray-700 mb-4">
          Znaki nakazu są istotnym elementem regulacji ruchu drogowego. Informują kierowców o obowiązku wykonania określonych manewrów lub poruszania się w określony sposób.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co to są znaki nakazu?</h2>
        <p className="text-gray-700 mb-4">
          Znaki nakazu to okrągłe znaki drogowe z niebieskim tłem, które wskazują na obowiązek wykonania określonych działań, takich jak jazda w określonym kierunku czy użycie określonej drogi.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Przykłady znaków nakazu</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Znak C-1:</strong> Nakaz jazdy w prawo za znakiem.</li>
          <li><strong>Znak C-2:</strong> Nakaz jazdy w lewo za znakiem.</li>
          <li><strong>Znak C-3:</strong> Nakaz jazdy prosto.</li>
          <li><strong>Znak C-16:</strong> Droga dla pieszych i rowerzystów.</li>
          <li><strong>Znak C-17:</strong> Droga dla rowerów.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Dlaczego są ważne?</h2>
        <p className="text-gray-700 mb-4">
          Znaki nakazu pomagają kierowcom i pieszym poruszać się zgodnie z przepisami ruchu drogowego, co zwiększa bezpieczeństwo i porządek na drodze.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co dalej?</h2>
        <p className="text-gray-700">
          Po zapoznaniu się z tym materiałem, przejdź do kolejnej sekcji, aby dowiedzieć się więcej o innych rodzajach znaków drogowych.
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
          onClick={() => navigate('/nauka/dzial1/zakazu')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Poprzedni
        </button>

        {/* Next Tile */}
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded disabled:bg-gray-200 disabled:text-gray-500"
          disabled={true} // Disabled because there is no next tile
        >
          Następny
        </button>
      </div>
    </div>
  );
}

export default ZNakazu;