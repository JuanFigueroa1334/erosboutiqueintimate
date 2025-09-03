import React,  { useState }from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar/navbar.jsx';
import Banner from './components/banner/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';
import Popup from './components/Popup/Popup.jsx';
import Home from './pages/home.jsx';
import Shop from './pages/shop.jsx';
import AOS from "aos";
import 'aos/dist/aos.css';

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();

    const popupShown = sessionStorage.getItem("popupShown");
    console.log("Estado popup:", orderPopup);
    if (!popupShown) {
      setOrderPopup(true);
      console.log("Estado popup:", orderPopup);
      sessionStorage.setItem("popupShown", "true");
      setTimeout(() => {
        setOrderPopup(false);
      }, 3000);
    }
    console.log("Estado popup:", orderPopup);
  }, []);


  return (
    <Router>
      <Navbar setSearchTerm={setSearchTerm}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop searchTerm={searchTerm}/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </Router> 
  )
}

export default App