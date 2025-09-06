import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import Home from './pages/Home.jsx';// Asegúrate de renombrar el archivo con mayúscula
import Store from './pages/Store.jsx'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setOrderPopup(true);
      sessionStorage.setItem("popupShown", "true");
      setTimeout(() => {
        setOrderPopup(false);
      }, 3000);
    }
  }, []);

  return (
    <>
    <Navbar setSearchTerm={setSearchTerm} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store searchTerm={searchTerm}/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> 
  </>
  );
};

export default App;
