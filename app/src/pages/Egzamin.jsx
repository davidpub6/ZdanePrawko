import React from 'react';
import TileCard from '../components/TileCard'; // lub inny komponent

function Egzamin() {
  return (
    <div className="bg-gray-100 p-6 ">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Egzamin</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 p-2">
        <TileCard 
          image="/images/jazda1.jpg"
          title="Naucz sie"
          description="Naucz się pytań pod egzamin teoretyczny"
          onClick={() => alert('Kliknięto kafelek')}
        />

        <TileCard 
          image="/images/jazda1.jpg"
          title="Test"
          description="Sprawdź się"
          onClick={() => alert('Kliknięto kafelek')}
        />
        </div>
    </div>
  );
}

export default Egzamin;