import { useEffect, useState, useContext } from "react";
import { getUserById, updateUser } from "../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const EditUser = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Si no hay id (ruta /mi-cuenta), usar id del usuario logueado
  const userIdToLoad = id || user?.id;

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    usuario: "",
    clave: "",
    perfil: "",
    fecha_nacimiento: "",
    genero: "",
    correo: "",
    contacto: "",
    direccion: "",
  });

  const formatDateForInput = (fecha) => {
    if (!fecha) return "";
    return fecha.split("T")[0];
  };

  const loadUser = async () => {
    if (!userIdToLoad) return; // seguridad
    const data = await getUserById(userIdToLoad);
    setForm({
      ...data,
      fecha_nacimiento: formatDateForInput(data.fecha_nacimiento),
    });
  };

  useEffect(() => {
    loadUser();
  }, [userIdToLoad]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await updateUser(userIdToLoad, form);

    if (data.status === 200) {
      setTipoMensaje("success");
      setMensaje("✔ Usuario actualizado correctamente");

      setTimeout(() => {
        // Si es admin → regresar al panel
        if (id) navigate("/admin/users");
        else navigate("/mi-cuenta");
      }, 1500);

    } else {
      setTipoMensaje("error");
      setMensaje("❌ Error al actualizar usuario");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 px-4">

      {mensaje && (
        <div
          className={`absolute top-6 z-[100] px-6 py-3 rounded-lg shadow-lg text-white font-semibold ${
            tipoMensaje === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {mensaje}
        </div>
      )}

      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl text-center font-bold mb-4">
          {id ? "Editar Usuario" : "Mi Cuenta"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <input className="input" name="nombre" value={form.nombre} onChange={handleChange} />
          <input className="input" name="apellidos" value={form.apellidos} onChange={handleChange} />
          <input className="input" name="usuario" value={form.usuario} onChange={handleChange} />
          <input className="input" name="correo" value={form.correo} onChange={handleChange} />
          <input className="input" name="contacto" value={form.contacto} onChange={handleChange} />
          <input className="input" name="direccion" value={form.direccion} onChange={handleChange} />

          <button className="bg-blue-600 text-white py-2 rounded-full">
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
