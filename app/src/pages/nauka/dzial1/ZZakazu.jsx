import React from 'react';
import { useNavigate } from 'react-router-dom';

function ZZakazu() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Znaki Zakazu</h1>
        <p className="text-gray-700 mb-4">
          Znaki zakazu są kluczowym elementem regulacji ruchu drogowego. Informują kierowców o zakazach obowiązujących na danym odcinku drogi, co pozwala na utrzymanie porządku i bezpieczeństwa.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co to są znaki zakazu?</h2>
        <p className="text-gray-700 mb-4">
          Znaki zakazu to okrągłe znaki drogowe z czerwoną obwódką, które wskazują na zakaz wykonywania określonych manewrów lub wjazdu na dany odcinek drogi.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Przykłady znaków zakazu</h2>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li><strong>Znak B-1:</strong> Zakaz ruchu w obu kierunkach.</li>
          <li><strong>Znak B-2:</strong> Zakaz wjazdu.</li>
          <li><strong>Znak B-20:</strong> Zakaz postoju.</li>
          <li><strong>Znak B-33:</strong> Ograniczenie prędkości.</li>
          <li><strong>Znak B-35:</strong> Zakaz postoju i zatrzymywania się.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Dlaczego są ważne?</h2>
        <p className="text-gray-700 mb-4">
          Znaki zakazu pomagają kierowcom unikać niebezpiecznych sytuacji i przestrzegać przepisów ruchu drogowego. Dzięki nim możliwe jest utrzymanie płynności ruchu i minimalizacja ryzyka wypadków.
        </p>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Co dalej?</h2>
        <p className="text-gray-700">
          Po zapoznaniu się z tym materiałem, przejdź do kolejnej sekcji, aby dowiedzieć się więcej o znakach nakazu i ich znaczeniu w ruchu drogowym.
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
          onClick={() => navigate('/nauka/dzial1/tile1')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Poprzedni
        </button>

        {/* Next Tile */}
        <button
          onClick={() => navigate('/nauka/dzial1/tile3')}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Następny
        </button>
      </div>
    </div>
  );
}

export default ZZakazu;