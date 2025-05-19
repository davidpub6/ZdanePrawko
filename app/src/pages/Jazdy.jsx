import React, { useState } from 'react';
import TileCard from '../components/TileCard'; // lub inny komponent

function Jazdy() {
  const [showModal, setShowModal] = useState(false);
  const [rideDetails, setRideDetails] = useState({date: '', time: ''});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  const handleSaveRide = () => {
    const user = JSON.parse(localStorage.getItem('user')); //zalogowany user
    const users = JSON.parse(localStorage.getItem('users')) || []; // Pobierz listę użytkowników

    const updatedUsers = users.map((u) => {
      if (u.user === user.user) {
        return {
          ...u,
          rides: [...(u.rides || []), rideDetails], // Dodaj nową jazdę do listy jazd
        };
      }
      return u;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Zapisz zaktualizowaną listę użytkowników
    setShowModal(false); // Zamknij modal
    setRideDetails({ date: '', time: ''}); // Resetuj formularz
  };

  return (
    <div className="bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Jazdy</h1>

      {/* Tile Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 p-2">
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
          onClick={() => setShowModal(true)}
        />
      </div>
    {/* Modal */}
    {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Umów jazdę</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Data:</label>
                <input
                  type="date"
                  name="date"
                  value={rideDetails.date}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Godzina:</label>
                <input
                  type="time"
                  name="time"
                  value={rideDetails.time}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Anuluj
                </button>
                <button
                  type="button"
                  onClick={handleSaveRide}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Zapisz
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* User's Scheduled Rides */}
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-xl font-bold mb-4">Twoje jazdy</h2>
        <ul className="list-disc pl-6">
          {JSON.parse(localStorage.getItem('users'))
            ?.find((u) => u.user === JSON.parse(localStorage.getItem('user')).user)
            ?.rides?.map((ride, index) => (
              <li key={index} className="text-gray-700">
                {ride.date} o {ride.time}
              </li>
            )) || <p className="text-gray-500">Brak umówionych jazd.</p>}
        </ul>
      </div>

    </div>
  );
}

export default Jazdy;