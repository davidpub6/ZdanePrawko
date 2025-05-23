import React from 'react';
import { useNavigate } from 'react-router-dom';
import TileSection from '../components/TileSection';

function Nauka() {
  const navigate = useNavigate(); // Initialize navigation function

  const sections = [
    {
      title: "Dział 1",
      tiles: [
        {
          image: "/images/tile1.jpg",
          title: "Tile 1",
          description: "Opis kafelka 1",
          onClick: () => navigate('/nauka/dzial1/tile1'), // Navigate to Tile 1 page
        },
        {
          image: "/images/tile2.jpg",
          title: "Tile 2",
          description: "Opis kafelka 2",
          onClick: () => navigate('/nauka/dzial1/tile2'), // Navigate to Tile 2 page
        },
        {
          image: "/images/tile3.jpg",
          title: "Tile 3",
          description: "Opis kafelka 3",
          onClick: () => navigate('/nauka/dzial1/tile3'), // Navigate to Tile 3 page
        },
      ],
    },
    {
      title: "Dział 2",
      tiles: [
        {
          image: "/images/tile4.jpg",
          title: "Tile 4",
          description: "Opis kafelka 4",
          onClick: () => navigate('/dzial2/tile4'), // Navigate to Tile 4 page
        },
        {
          image: "/images/tile5.jpg",
          title: "Tile 5",
          description: "Opis kafelka 5",
          onClick: () => navigate('/dzial2/tile5'), // Navigate to Tile 5 page
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-left mb-8 w-full">Nauka</h1>
      {sections.map((section, index) => (
        <TileSection key={index} title={section.title} tiles={section.tiles} />
      ))}
    </div>
  );
}

export default Nauka;