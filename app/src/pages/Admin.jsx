import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usersJson from '../Data/users.json';

const Admin = () => {
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({});
  const u = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "Page Not Found" if the user is not an admin
    if (!u || u.user !== 'admin') {
      navigate('/404', { replace: true }); // Replace ensures no back navigation to this page
    }
  }, [u, navigate]);

  useEffect(() => {
    // Load users from localStorage or from users.json if localStorage is empty
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      setUsers(usersJson);
      localStorage.setItem('users', JSON.stringify(usersJson));
    }
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEditClick = (user) => {
    setEditUserId(user.id);
    setEditUserData({ ...user });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUserId ? editUserData : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditUserId(null);
    setEditUserData({});
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditUserData({});
  };

  return (
    <div className="">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Page</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome, <span className="font-semibold text-gray-800">{u.user}</span>!
        </p>

        {/* Modal */}
        {showUsersModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Users</h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-2 py-1">ID</th>
                    <th className="border px-2 py-1">Username</th>
                    <th className="border px-2 py-1">Email</th>
                    <th className="border px-2 py-1">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center p-4">
                        No users found.
                      </td>
                    </tr>
                  )}
                  {users.map((user) => (
                    <tr key={user.id} className="border-t">
                      <td className="border px-2 py-1">{user.id}</td>
                      <td className="border px-2 py-1">
                        {editUserId === user.id ? (
                          <input
                            type="text"
                            name="user"
                            value={editUserData.user || ' '}
                            onChange={handleEditChange}
                            className="w-full p-1 border rounded"
                          />
                        ) : (
                          user.user
                        )}
                      </td>
                      <td className="border px-2 py-1">
                        {editUserId === user.id ? (
                          <input
                            type="email"
                            name="email"
                            value={editUserData.email || ''}
                            onChange={handleEditChange}
                            className="w-full p-1 border rounded"
                          />
                        ) : (
                          user.email
                        )}
                      </td>
                      <td className="border px-2 py-1 space-x-2">
                        {editUserId === user.id ? (
                          <>
                            <button
                              onClick={handleSaveEdit}
                              className="bg-green-500 text-white px-2 py-1 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              key={user.id}
                              onClick={() => handleEditClick(user)}
                              className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                              Edit
                            </button>
                            <button
                              key={user.id}
                              onClick={() => handleDeleteUser(user.id)}
                              className="bg-red-500 text-white px-2 py-1 rounded"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowUsersModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admin Actions:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li
              className="text-gray-600 hover:text-gray-800 cursor-pointer"
              onClick={() => setShowUsersModal(true)}
            >
              View Users
            </li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Manage Content</li>
            <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Settings</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
