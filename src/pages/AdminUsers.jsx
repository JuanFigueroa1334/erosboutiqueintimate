import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const remove = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
    <div>
      <h1>Administración de Usuarios</h1>
      
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Usuario</th><th>Perfil</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre} {u.apellidos}</td>
              <td>{u.usuario}</td>
              <td>{u.perfil}</td>
              <td>
                <button onClick={() => remove(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
