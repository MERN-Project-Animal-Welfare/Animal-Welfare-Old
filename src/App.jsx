import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { 
  Dashboard, 
  PutUpForAdoption, 
  AdoptPet, 
  ContactVet, 
  ReportAnimal, 
  Volunteer 
} from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/put-up-for-adoption" element={<PutUpForAdoption />} />
          <Route path="/adopt-pet" element={<AdoptPet />} />
          <Route path="/contact-vet" element={<ContactVet />} />
          <Route path="/report-animal" element={<ReportAnimal />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
