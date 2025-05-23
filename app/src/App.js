
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import Login from './pages/Login';
import Jazdy from './pages/Jazdy';
import Egzamin from './pages/Egzamin';
import Nauka from './pages/Nauka';

import Tile1Page from './pages/nauka/dzial1/Tile1'; // Import Tile 1 page
import Tile2Page from './pages/nauka/dzial1/Tile2'; // Import Tile 2 page
import Tile3Page from './pages/nauka/dzial1/Tile3'; // Import Tile 3 page

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

                      {/* Add routes for Nauka tiles */}
                      <Route path="/nauka/dzial1/tile1" element={<Tile1Page />} />
                      <Route path="/nauka/dzial1/tile2" element={<Tile2Page />} />
                      <Route path="/nauka/dzial1/tile3" element={<Tile3Page />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;