import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const u = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to "Page Not Found" if the user is not an admin
        if (!u || u.user !== 'admin') {
            navigate('/404', { replace: true }); // Replace ensures no back navigation to this page
        }
    }, [u, navigate]);

    return (
        <div className="">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Page</h1>
                <p className="text-lg text-gray-600 mb-6">Welcome, <span className="font-semibold text-gray-800">{u.user}</span>!</p>
                
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Admin Actions:</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">View Users</li>
                        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Manage Content</li>
                        <li className="text-gray-600 hover:text-gray-800 cursor-pointer">Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Admin;