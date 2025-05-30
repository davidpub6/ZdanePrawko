
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

// Main pages
import Login from './pages/Login';
import Jazdy from './pages/Jazdy';
import Egzamin from './pages/Egzamin';
import Nauka from './pages/Nauka';

// Nauka sub-pages
import ZOstrzegawcze from './pages/nauka/dzial1/ZOstrzegawcze';
import ZZakazu from './pages/nauka/dzial1/ZZakazu';
import ZNakazu from './pages/nauka/dzial1/ZNakazu';

// Egzamin sub-pages (just the test page)
import TestProbny from './pages/egzamin/Test';

// NotFound page for handling 404 errors
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
                      <Route path="/nauka/dzial1/ostrzegawcze" element={<ZOstrzegawcze />} />
                      <Route path="/nauka/dzial1/zakazu" element={<ZZakazu />} />
                      <Route path="/nauka/dzial1/nakazu" element={<ZNakazu />} />

                      {/* Add route for Test */}
                      <Route path="/egzamin/test" element={<TestProbny />} />
                    </Route>
                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;