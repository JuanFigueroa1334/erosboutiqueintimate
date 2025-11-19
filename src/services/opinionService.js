import { API_OPINION } from "./api";

// Obtener todas las opiniones
export const getOpiniones = async () => {
  const res = await fetch(`${API_OPINION}/`);
  return res.json();
};

// Agregar nueva opinión
export const addOpinion = async (opinionData) => {
  const res = await fetch(`${API_OPINION}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opinionData)
  });
  return res.json();
};

// Eliminar opinión
export const deleteOpinion = async (id) => {
  const res = await fetch(`${API_OPINION}/delete/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
