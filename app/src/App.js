
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';

import Login from './pages/Login';
import Jazdy from './pages/Jazdy';
import Egzamin from './pages/Egzamin';
import Nauka from './pages/Nauka';

import ZOstrzegawcze from './pages/nauka/dzial1/ZOstrzegawcze';
import ZZakazu from './pages/nauka/dzial1/ZZakazu';
import ZNakazu from './pages/nauka/dzial1/ZNakazu';

import Zasady1 from './pages/nauka/dzial2/Zasady1';
import Zasady2 from './pages/nauka/dzial2/Zasady2';

import Przykladowe from './pages/jazdy/PrzykladoweJazdy';

import TestProbny from './pages/egzamin/Test';
import EgzaminNauka from './pages/egzamin/NauczSieQuiz';

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

                      <Route path="/nauka/dzial2/zasady-1" element={<Zasady1 />} />
                      <Route path="/nauka/dzial2/zasady-2" element={<Zasady2 />} />

                      {/* Add routes for Jazdy tiles */}
                      <Route path="/jazdy/przykladowe" element={<Przykladowe />} />

                      {/* Add route for Test */}
                      <Route path="/egzamin/test" element={<TestProbny />} />
                      <Route path="/egzamin/nauka" element={<EgzaminNauka />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;