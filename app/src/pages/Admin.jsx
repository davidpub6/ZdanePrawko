import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs-react';
import salt from '../Data/salt.json';
import usersJson from '../Data/users.json';

const Admin = () => {
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const [editUserData, setEditUserData] = useState({ password: '' });
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [newUserData, setNewUserData] = useState({ user: '', email: '', password: '' });
  const [showEditPasswordInput, setShowEditPasswordInput] = useState(false);
  const [showAddPasswordInput, setShowAddPasswordInput] = useState(false);
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
    const updatedUsers = users.filter((user, userIndex) => userIndex !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleEditClick = (user, userIndex) => {
    setEditUserId(userIndex);
    // Set password field empty when editing user to avoid showing current password
    // Do not change user data here, keep as is except password field empty
    setEditUserData((prevData) => ({ ...prevData, password: '' }));
    setShowEditPasswordInput(false);
    // Do not update localStorage user here as user data is not changed
  };

  const handleAddUserChange = (name, value) => {
    setNewUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUserPasswordClick = () => {
    setShowAddPasswordInput(true);
  };

  const handleEditPasswordClick = () => {
    setShowEditPasswordInput(true);
  };

  const handleAddUserPasswordChange = (e) => {
    setNewUserData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };

  const handleEditPasswordChange = (e) => {
    setEditUserData((prevData) => ({
      ...prevData,
      password: e.target.value,
    }));
  };

  const handleAddUser = () => {
    if (!newUserData.user.trim()) {
      alert('Username cannot be empty');
      return;
    }
    if (!newUserData.email.trim() || !newUserData.email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }
    // Hash password before saving
    const hashedPassword = bcrypt.hashSync(newUserData.password, salt);
    const userToAdd = { ...newUserData, password: hashedPassword };
    const updatedUsers = [...users, userToAdd];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setNewUserData({ user: '', email: '', password: '' });
    setShowAddUserModal(false);
    setShowAddPasswordInput(false);
  };

  const handleEditChange = (name, value) => {
    setEditUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    // Hash password before saving
    const hashedPassword = bcrypt.hashSync(editUserData.password, salt);
    const userToSave = { ...editUserData, pass: hashedPassword };
    const updatedUsers = users.map((user, userIndex) =>
      userIndex === editUserId ? userToSave : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setEditUserId(null);
    setEditUserData({ password: '' });
    setShowEditPasswordInput(false);
  };

  const handleCancelEdit = () => {
    setEditUserId(null);
    setEditUserData({ password: '' });
    setShowEditPasswordInput(false);
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
            <div className="bg-white p-6 rounded-lg shadow-lg w-400 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
                Users
                <button
                  onClick={() => setShowAddUserModal(true)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Add User
                </button>
              </h2>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border px-2 py-1">Username</th>
                    <th className="border px-2 py-1">Email</th>
                    <th className="border px-2 py-1">Password</th>
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
                  {users.map((user, userIndex) => (
                    <tr key={userIndex} className="border-t">
                      <td className="border px-2 py-1">
                        {editUserId === userIndex ? (
                          <input
                            type="text"
                            name={"user" + userIndex}
                            value={editUserData.user || ' '}
                            onChange={(e) => {
                              handleEditChange('user', e.target.value);
                            }}
                            className="w-full p-1 border rounded"
                          />
                        ) : (
                          user.user
                        )}
                      </td>
                      <td className="border px-2 py-1">
                        {editUserId === userIndex ? (
                          <input
                            type="email"
                            name={"email" + userIndex}
                            value={editUserData.email || ''}
                            onChange={(e) => {
                              handleEditChange('email', e.target.value);
                            }}
                            className="w-full p-1 border rounded"
                          />
                        ) : (
                          user.email
                        )}
                      </td>
                      <td className="border px-2 py-1">
                        {editUserId === userIndex ? (
                          showEditPasswordInput ? (
                            <input
                              type="password"
                              name={"password" + userIndex}
                              value={editUserData.password || ''}
                              onChange={handleEditPasswordChange}
                              className="w-full p-1 border rounded"
                            />
                          ) : (
                            <button
                              type="button"
                              onClick={handleEditPasswordClick}
                              className="bg-purple-500 text-white px-2 py-1 rounded"
                            >
                              New Password
                            </button>
                          )
                        ) : (
                          '********'
                        )}
                      </td>
                      <td className="border px-2 py-1 space-x-2">
                        {editUserId === userIndex ? (
                          <>
                            <button
                              key="save"
                              onClick={handleSaveEdit}
                              className="bg-green-500 text-white px-2 py-1 rounded"
                            >
                              Save
                            </button>
                            <button
                              key="cancel"
                              onClick={handleCancelEdit}
                              className="bg-gray-500 text-white px-2 py-1 rounded"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              key="edit"
                              onClick={() => handleEditClick(user, userIndex)}
                              className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                              Edit
                            </button>
                            <button
                              key="delete"
                              onClick={() => handleDeleteUser(userIndex)}
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

        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Add New User</h2>
              <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="newUserName">
                  Username
                </label>
                <input
                  id="newUserName"
                  type="text"
                  value={newUserData.user}
                  onChange={(e) => handleAddUserChange('user', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="newUserEmail">
                  Email
                </label>
                <input
                  id="newUserEmail"
                  type="email"
                  value={newUserData.email}
                  onChange={(e) => handleAddUserChange('email', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold" htmlFor="newUserPassword">
                  Password
                </label>
                {showAddPasswordInput ? (
                  <input
                    id="newUserPassword"
                    type="password"
                    value={newUserData.password}
                    onChange={handleAddUserPasswordChange}
                    className="w-full p-2 border rounded"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={handleAddUserPasswordClick}
                    className="bg-purple-500 text-white px-2 py-1 rounded"
                  >
                    New Password
                  </button>
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleAddUser}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddUserModal(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
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
