import React from 'react';
import TileCard from '../components/TileCard'; // lub inny komponent

function Jazdy() {
  return (
    <div className="bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Jazdy</h1>

      {/* Tile Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Tile Card 1 */}
        <TileCard
          image="/images/jazda1.jpg"
          title="Przykładowe jazdy"
          description="Zobacz przykładowe jazdy."
          onClick={() => alert('Kliknięto kafelek Przykładowe jazdy')}
        />

        {/* Tile Card 2 */}
        <TileCard
          image="/images/jazda2.jpg"
          title="Umów jazdę"
          description="Umów się na jazdę z instruktorem."
          onClick={() => alert('Kliknięto kafelek Umów jazdę')}
        />
      </div>

      {/* Additional Materials Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Materiały dodatkowe</h2>
        <p className="text-gray-700">
          Tutaj znajdziesz dodatkowe materiały, które pomogą Ci w nauce jazdy.
        </p>
      </div>

    </div>
  );
}

export default Jazdy;