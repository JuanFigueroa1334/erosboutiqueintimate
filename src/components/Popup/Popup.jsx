 import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import logoEros from "../../assets/img/logo_v3.png"

const Popup = ({ orderPopup, setOrderPopup }) => {
  // --- Estados para cookies y edad ---
  const [cookiesAceptadas, setCookiesAceptadas] = useState(false);
  const [mayorEdad, setMayorEdad] = useState(false);

  useEffect(() => {
    // Verificar si ya aceptó cookies
    const cookies = localStorage.getItem("cookiesAceptadas");
    if (cookies === "true") setCookiesAceptadas(true);

    // Verificar si ya confirmó edad
    const edad = localStorage.getItem("mayorEdad");
    if (edad === "true") setMayorEdad(true);
  }, []);

  const aceptarCookies = () => {
    setCookiesAceptadas(true);
    localStorage.setItem("cookiesAceptadas", "true");
  };

  const confirmarMayorEdad = () => {
    setMayorEdad(true);
    localStorage.setItem("mayorEdad", "true");
    setOrderPopup(false); 
  };

  const rechazarMayorEdad = () => {
    alert("Lo sentimos, este sitio es solo para mayores de 18 años.");
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      {/* Popup original */}
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md duration-200 shadow-md containerPopup w-[300px] text-center   ">
              <img src={logoEros} alt="logo" />
              <h2 className="text-2xl font-bold mb-4 sty-h2pop">
                Bienvenido a ÉROS Boutique Intimate
              </h2>
              <p className="max-w-md mb-6 sty-Parpop">
                Este sitio contiene contenido dirigido exclusivamente a personas{" "}
                <strong>mayores de 18 años</strong>. Por favor confirma tu edad para
                continuar.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={confirmarMayorEdad}
                  className="bg-yellow-400 text-black px-5 py-2 font-bold rounded"
                >
                  Soy mayor de 18
                </button>
                <button
                  onClick={rechazarMayorEdad}
                  className="bg-gray-600 px-5 py-2 rounded"
                >
                  Soy menor de 18
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Banner de cookies */}
      {!cookiesAceptadas && (
        <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 text-center text-sm z-[9999]">
          Usamos cookies para mejorar tu experiencia en{" "}
          <strong>ÉROS Boutique Intimate</strong>. Al continuar, aceptas nuestra{" "}
          <a
            href="/politica-de-datos.html"
            className="text-yellow-400 underline"
          >
            Política de Tratamiento de Datos
          </a>
          .
          <div className="mt-3">
            <button
              onClick={aceptarCookies}
              className="bg-yellow-400 text-black px-4 py-2 font-bold rounded"
            >
              Aceptar
            </button>
          </div>
        </div>
      )}

      {/* Modal de verificación de edad */}
      {!mayorEdad && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/95 flex flex-col items-center justify-center text-white z-[10000]">

        </div>
      )}
    </>
  );
};

export default Popup;
