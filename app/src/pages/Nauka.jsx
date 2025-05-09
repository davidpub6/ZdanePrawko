import React from 'react';
import TileSection from '../components/TileSection';

function Nauka() {
  // Example data for the "działy" (sections)
  const sections = [
    {
      title: "Dział 1",
      tiles: [
        { image: "/images/tile1.jpg", title: "Tile 1", description: "Opis kafelka 1", onClick: () => alert("Kliknięto Tile 1") },
        { image: "/images/tile2.jpg", title: "Tile 2", description: "Opis kafelka 2", onClick: () => alert("Kliknięto Tile 2") },
        { image: "/images/tile3.jpg", title: "Tile 3", description: "Opis kafelka 3", onClick: () => alert("Kliknięto Tile 3") },
        { image: "/images/tile1.jpg", title: "Tile 1", description: "Opis kafelka 1", onClick: () => alert("Kliknięto Tile 1") },
        { image: "/images/tile2.jpg", title: "Tile 2", description: "Opis kafelka 2", onClick: () => alert("Kliknięto Tile 2") },
        { image: "/images/tile3.jpg", title: "Tile 3", description: "Opis kafelka 3", onClick: () => alert("Kliknięto Tile 3") },
        { image: "/images/tile1.jpg", title: "Tile 1", description: "Opis kafelka 1", onClick: () => alert("Kliknięto Tile 1") },
        { image: "/images/tile2.jpg", title: "Tile 2", description: "Opis kafelka 2", onClick: () => alert("Kliknięto Tile 2") },
        { image: "/images/tile3.jpg", title: "Tile 3", description: "Opis kafelka 3", onClick: () => alert("Kliknięto Tile 3") },
        { image: "/images/tile1.jpg", title: "Tile 1", description: "Opis kafelka 1", onClick: () => alert("Kliknięto Tile 1") },
        { image: "/images/tile2.jpg", title: "Tile 2", description: "Opis kafelka 2", onClick: () => alert("Kliknięto Tile 2") },
        { image: "/images/tile3.jpg", title: "Tile 3", description: "Opis kafelka 3", onClick: () => alert("Kliknięto Tile 3") },
        { image: "/images/tile1.jpg", title: "Tile 1", description: "Opis kafelka 1", onClick: () => alert("Kliknięto Tile 1") },
        { image: "/images/tile2.jpg", title: "Tile 2", description: "Opis kafelka 2", onClick: () => alert("Kliknięto Tile 2") },
        { image: "/images/tile3.jpg", title: "Tile 3", description: "Opis kafelka 3", onClick: () => alert("Kliknięto Tile 3") },
      ],
    },
    {
      title: "Dział 2",
      tiles: [
        { image: "/images/tile4.jpg", title: "Tile 4", description: "Opis kafelka 4", onClick: () => alert("Kliknięto Tile 4") },
        { image: "/images/tile5.jpg", title: "Tile 5", description: "Opis kafelka 5", onClick: () => alert("Kliknięto Tile 5") },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Jazdy</h1>
      
      {sections.map((section, index) => (
        <TileSection key={index} title={section.title} tiles={section.tiles} />
      ))}
    </div>
  );
}

export default Nauka;