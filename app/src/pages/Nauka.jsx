import React from 'react';
import { useNavigate } from 'react-router-dom';
import TileSection from '../components/TileSection';

function Nauka() {
  const navigate = useNavigate(); // Initialize navigation function

  const sections = [
    {
      title: "Dział 1 : Znaki Drogowe",
      tiles: [
        {
          image: "https://picsum.photos/200/300?random=1",
          title: "Znaki Ostrzegawcze...",
          description: "Naucz sie znakow ostrzegawczych",
          onClick: () => navigate('/nauka/dzial1/ostrzegawcze') // Navigate to Tile 1 page
        },
        {
          image: "https://picsum.photos/200/300?random=2",
          title: "Znaki Zakazu",
          description: "Naucz sie znakow zakazu...",
          onClick: () => navigate('/nauka/dzial1/zakazu') // Navigate to Tile 2 page
        },
        {
          image: "https://picsum.photos/200/300?random=3",
          title: "Znaki Nakazu",
          description: "Naucz sie znakow nakazu...",
          onClick: () => navigate('/nauka/dzial1/nakazu') // Navigate to Tile 3 page
        }
      ]
    },
    {
      title: "Dział 2: Zasady Ogólne",
      tiles: [
        {
          image: "https://picsum.photos/200/300?random=4",
          title: "Zasady Ogólne 1",
          description: "Podstawowe zasady...",
          onClick: () => navigate('/nauka/dzial2/zasady-1'), // Navigate to Tile 4 page
        },
        {
          image: "https://picsum.photos/200/300?random=5",
          title: "Zasady Ogólne 2",
          description: "Zachowanie na skrzyżowaniach...",
          onClick: () => navigate('/nauka/dzial2/zasady-2'), // Navigate to Tile 5 page
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