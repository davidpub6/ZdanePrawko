/*
import React from "react";

function TileCard({ image, title, description, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="cursor-pointer rounded-xl overflow-hidden shadow-md transition hover:scale-105 max-w-sm"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default TileCard;
*/

import React from 'react';

function TileCard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Karty Kursów</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Tile 1" />
            <div className="card-body">
              <h5 className="card-title">Kurs A</h5>
              <p className="card-text">Krótki opis kursu A.</p>
              <a href="#" className="btn btn-primary">Zapisz się</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Tile 2" />
            <div className="card-body">
              <h5 className="card-title">Kurs B</h5>
              <p className="card-text">Krótki opis kursu B.</p>
              <a href="#" className="btn btn-primary">Zapisz się</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/300x200" className="card-img-top" alt="Tile 3" />
            <div className="card-body">
              <h5 className="card-title">Kurs C</h5>
              <p className="card-text">Krótki opis kursu C.</p>
              <a href="#" className="btn btn-primary">Zapisz się</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileCard;
