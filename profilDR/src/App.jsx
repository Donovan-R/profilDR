import { useState } from 'react';
import Navbar from '../components/Navbar';
import Presentation from './pages/Presentation';
import Formation from './pages/Formation';
import Experiences from './pages/Experiences';
import Projets from './pages/Projets';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Presentation />}></Route>
        <Route path='/formation' element={<Formation />}></Route>
        <Route path='/experiences' element={<Experiences />}></Route>
        <Route path='/projets' element={<Projets />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
