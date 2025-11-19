import { useState } from "react";
import { addUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    usuario: "",
    clave: "",
    perfil: "User",
    fecha_nacimiento: "",
    genero: "",
    correo: "",
    contacto: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await addUser(form);

    if (data.message === "Usuario insertado") {
      setMensaje("✔ Cuenta creada correctamente");
      setTipoMensaje("success");

      setTimeout(() => navigate("/login"), 1500);
    } else {
      setMensaje("❌ Error al registrar usuario");
      setTipoMensaje("error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
        {/* MENSAJE FLOTANTE */}
      {mensaje && (
        <div
          className={`absolute top-6 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition-all duration-300 ${
            tipoMensaje === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {mensaje}
        </div>
      )}
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">

        {/* ICONO */}
        <div className="flex justify-center mb-4">
          <div className="bg-c88b7f/20 p-4 rounded-full">
            <UserPlus size={48} className="text-c88b7f" />
          </div>
        </div>

        {/* TITULO */}
        <h2 className="text-2xl text-center font-bold text-gray-700 mb-4">
          Crear cuenta
        </h2>

        {/* MENSAJE */}
        {mensaje && (
          <p
            className={`text-center font-semibold py-2 mb-3 ${
              mensaje.includes("✔") ? "text-green-600" : "text-red-500"
            }`}
          >
            {mensaje}
          </p>
        )}

        {/* FORMULARIO */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">

          {/* NOMBRE */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="input"
            onChange={handleChange}
          />

          {/* APELLIDOS */}
          <input
            type="text"
            name="apellidos"
            placeholder="Apellidos"
            className="input"
            onChange={handleChange}
          />

          {/* USUARIO */}
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            className="input"
            onChange={handleChange}
          />

          {/* CLAVE */}
          <input
            type="password"
            name="clave"
            placeholder="Clave"
            className="input"
            onChange={handleChange}
          />

          {/* FECHA NACIMIENTO */}
          <input
            type="date"
            name="fecha_nacimiento"
            className="input"
            onChange={handleChange}
          />

          {/* GENERO */}
          <select
            name="genero"
            className="input"
            onChange={handleChange}
          >
            <option value="">Seleccione género</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="Otro">Otro</option>
          </select>

          {/* CORREO */}
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            className="input"
            onChange={handleChange}
          />

          {/* CONTACTO */}
          <input
            type="text"
            name="contacto"
            placeholder="Número de contacto"
            className="input"
            onChange={handleChange}
          />

          {/* DIRECCIÓN */}
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            className="input"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-[#eac0b6] text-white font-semibold py-2 rounded-full
                      hover:bg-[#b3796e] transition-all duration-300 shadow-md"
          >
            Registrarme
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full text-c88b7f font-semibold hover:underline"
          >
            Ya tengo cuenta
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;
