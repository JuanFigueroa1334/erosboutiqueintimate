import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";
import { Link } from "react-router-dom";
import { Trash2, Pencil } from "lucide-react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [mensaje, setMensaje] = useState("");

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const remove = async (id) => {
    if (!confirm("¿Desea eliminar este usuario?")) return;

    await deleteUser(id);
    setMensaje("✔ Usuario eliminado correctamente");

    loadUsers();

    setTimeout(() => setMensaje(""), 2000);
  };

  return (
    <div className="p-6">

      {/* Mensaje flotante */}
      {mensaje && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {mensaje}
        </div>
      )}

      <h1 className="text-3xl font-bold mb-6">Administración de Usuarios</h1>

      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Usuario</th>
              <th className="p-3">Perfil</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.nombre} {u.apellidos}</td>
                <td className="p-3">{u.usuario}</td>
                <td className="p-3">{u.perfil}</td>

                <td className="p-3 flex justify-center gap-3">

                  {/* EDITAR */}
                  <Link
                    to={`/admin/users/edit/${u.id}`}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <Pencil size={20} />
                  </Link>

                  {/* ELIMINAR */}
                  <button
                    onClick={() => remove(u.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={20} />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
