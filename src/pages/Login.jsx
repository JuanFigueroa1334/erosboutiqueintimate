import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react"; // Ícono

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(usuario, clave);

    if (data.perfil) {
      login(data);
      setMensaje(`✔ Bienvenido ${data.nombre || data.usuario}`);

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } else {
      setMensaje("❌ Credenciales incorrectas");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        
        {/* ICONO */}
        <div className="flex justify-center mb-4">
          <div className="bg-c88b7f/20 p-4 rounded-full">
            <User size={48} className="text-c88b7f" />
          </div>
        </div>

        {/* TITULO */}
        <h2 className="text-2xl text-center font-bold text-gray-700 mb-4">
          Iniciar sesión
        </h2>

        {/* MENSAJE */}
        {mensaje && (
          <p
            className={`text-center font-semibold py-2 mb-3 ${
              mensaje.includes("Bienvenido")
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {mensaje}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

          <input
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
            className="w-full px-4 py-2 border rounded-full shadow-sm text-gray-700 
                       focus:outline-none focus:ring-2 focus:ring-c88b7f 
                       hover:border-c88b7f transition-all"
          />

          <input
            type="password"
            placeholder="Clave"
            onChange={(e) => setClave(e.target.value)}
            className="w-full px-4 py-2 border rounded-full shadow-sm text-gray-700
                       focus:outline-none focus:ring-2 focus:ring-c88b7f
                       hover:border-c88b7f transition-all"
          />
          <button
            type="submit"
            className="w-full bg-[#eac0b6] text-white font-semibold py-2 rounded-full
                        hover:bg-[#b3796e] transition-all duration-300 shadow-md"
            >
            Entrar
            </button>
            <button
                type="button"
                onClick={() => navigate("/register")}
                className="w-full mt-3 text-c88b7f font-semibold hover:underline"
                >
                ¿No tienes cuenta? Regístrate aquí
            </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
