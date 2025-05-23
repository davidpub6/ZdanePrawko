
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import Login from './pages/Login';
import Jazdy from './pages/Jazdy';
import Egzamin from './pages/Egzamin';
import Nauka from './pages/Nauka';

import NotFound from './pages/NotFound';

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<DashboardLayout />}>
                        {/*Remember to change the routes in the Sidebar component*/}
                        <Route path="/jazdy" element={<Jazdy />} />
                        <Route path="/egzamin" element={<Egzamin />} />
                        <Route path="/nauka" element={<Nauka />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;