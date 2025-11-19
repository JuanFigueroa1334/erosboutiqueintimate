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
//login
import Login from "./pages/Login";
import AdminUsers from "./pages/AdminUsers";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import Register from "./pages/Register";
import EditUser from "./pages/EditUser.jsx";
//productos
import AdminProductos from "./pages/AdminProductos";


const ProtectedRoute = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  if (!user || user.perfil !== "Admin") {
    return <Navigate to="/login" replace />;
  }
  return children;
}; 
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
    <AuthProvider>
      <CartProvider>
      <Navbar setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminUsers />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/users/edit/:id" element={<EditUser />} />
        <Route path="/mi-cuenta" element={<EditUser />} />

        <Route
          path="/admin/productos"
          element={
            <ProtectedRoute>
              <AdminProductos />
            </ProtectedRoute>
          }
        />

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
    </AuthProvider>
  );
};

export default App;
