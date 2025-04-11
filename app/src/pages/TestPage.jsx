import React from 'react';
import TileCard from './components/TileCard'; // lub inny komponent

function App() {
  return (
    <div className="p-6">
      <TileCard 
        image="/images/jazda1.jpg"
        title="Test kafelka"
        description="To jest testowy kafelek."
        onClick={() => alert('Kliknięto kafelek')}
      />
    </div>
  );
}

export default TestPage;