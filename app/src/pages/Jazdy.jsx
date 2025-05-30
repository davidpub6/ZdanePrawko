import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TileCard from '../components/TileCard';

function Jazdy() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [rideDetails, setRideDetails] = useState({date: '', time: ''});
  const [rides, setRides] = useState([]); // State to store rides

  // Load rides from localStorage when the component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setRides(user.rides || []);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRideDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  }

  const handleSaveRide = () => {
    const user = JSON.parse(localStorage.getItem('user')); //zalogowany user
    if (!user) {
      console.error('Brak zalogowanego użytkownika!');
      return;
    }

    // Add the new ride to the user's rides
    const updatedRides = [...rides, rideDetails];
    const updatedUser = { ...user, rides: updatedRides };

    // Save the updated user to localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setRides(updatedRides); // Update the state
    setShowModal(false); // Close the modal
    setRideDetails({ date: '', time: '' }); // Reset the form
  };

  const cancelRide = (index) => {
    const user = JSON.parse(localStorage.getItem('user')); // Pobierz zalogowanego użytkownika

    // Usuń jazdę z listy jazd
    const updatedRides = user.rides.filter((_, i) => i !== index);
    const updatedUser = { ...user, rides: updatedRides };

    // Zapisz zaktualizowanego użytkownika w localStorage
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setRides(updatedRides); // Update the state to trigger a re-render
  }

  return (
    <div className="bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-left mb-8">Jazdy</h1>

      {/* Tile Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8 p-2">
        {/* Tile Card 1 */}
        <TileCard
          image="https://picsum.photos/700/300?random=1"
          title="Przykładowe jazdy"
          description="Zobacz przykładowe jazdy."
          onClick={() => navigate("/jazdy/przykladowe")}
        />

        {/* Tile Card 2 */}
        <TileCard
          image="https://picsum.photos/700/300?random=2"
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
          {rides.length > 0 ? (
            rides.map((ride, index) => (
              <li key={index} className="text-gray-700">
                <pre>
                  {ride.date} o {ride.time}{' '}
                  <button
                    onClick={() => cancelRide(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Anuluj
                  </button>
                </pre>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Brak umówionych jazd.</p>
          )}
        </ul>
      </div>

    </div>
  );
}

export default Jazdy;