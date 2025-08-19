import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pets from './components/Pets';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdoptionForm from './components/AdoptionForm';
import './index.css';
import FAQs from './components/FAQs';


function App() {
return (
  <Router>
    <ToastContainer position="top-right" autoClose={3000} />
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/apply/:petId" element={<AdoptionForm />} />
      <Route path="/faqs" element={<FAQs />} />

      
      <Route path="/apply/:petId" element ={<AdoptionForm />} />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);
}

export default App;