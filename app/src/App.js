
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import LoginPage from './pages/LoginPage';
import Jazdy from './pages/Jazdy';
import TestPage2 from './pages/TestPage2';
import Nauka from './pages/Nauka';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route element={<DashboardLayout />}>
                    {/*Remember to change the routes in the Sidebar component*/}
                    <Route path="/jazdy" element={<Jazdy />} />
                    <Route path="/test2" element={<TestPage2 />} />
                    <Route path="/nauka" element={<Nauka />} />
                </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;