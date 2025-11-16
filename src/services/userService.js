import { API_URL } from "./api";

export const loginUser = async (usuario, clave) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ usuario, clave })
  });
  return res.json();
};

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/`);
  return res.json();
};

export const addUser = async (user) => {
  const res = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return res.json();
};

export const updateUser = async (id, user) => {
  const res = await fetch(`${API_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user)
  });
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
