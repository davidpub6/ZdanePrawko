import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardLayout from './layouts/DashboardLayout';

import Login from './pages/Login';
import TestPage from './pages/TestPage';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<DashboardLayout />}>
              <Route path="/test1" element={<TestPage />} />
              <Route path="/test2" element={<TestPage2 />} />
              <Route path="/test3" element={<TestPage3 />} />
            </Route>
          </Routes>
      </Router>
      <div>
        HELLO WORLD
      </div>
    </div>
  );
}

export default App;