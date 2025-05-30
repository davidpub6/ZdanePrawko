import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrzykladoweJazdy = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zdVoy3SUJ5Y?si=plJJFDeSmJsf8i_v"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
          <button
            onClick={() => navigate(-1)}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Powrót
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrzykladoweJazdy;
