import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser(usuario, clave);

    if (data.perfil) {
      login(data);
      navigate("/admin/users");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-box">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Usuario"
          onChange={(e) => setUsuario(e.target.value)} />
        <input type="password" placeholder="Clave"
          onChange={(e) => setClave(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
