import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { CartProvider } from "./context/CartContext";
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx'; 
import Home from './pages/Home.jsx';// Asegúrate de renombrar el archivo con mayúscula
import Store from './pages/Store.jsx'; 
import Cart from "./pages/Cart.jsx";
import Politicas_Datos_Personales from './pages/Politicas_Datos_Personales.jsx';
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
      //setTimeout(() => {
        //setOrderPopup(false);
      //}, 3000);
    }
  }, []);

  return (
    <CartProvider>
    <Navbar setSearchTerm={setSearchTerm} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store searchTerm={searchTerm}/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/Politicas-Tratamiento-de-Datos" element={<Politicas_Datos_Personales/>}/>
    </Routes>
     <WhatsAppButton />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> 
  </CartProvider>
  );
};

export default App;
