import { API_PRODUCTO } from "./api"; 

export const getProductos = async () => {
  const res = await fetch(`${API_PRODUCTO}/`);
  return res.json();
};

export const getProducto = async (id) => {
  const res = await fetch(`${API_PRODUCTO}/${id}`);
  return res.json();
};

export const addProducto = async (producto) => {
  const res = await fetch(`${API_PRODUCTO}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });
  return res.json();
};

export const updateProducto = async (id, producto) => {
  const res = await fetch(`${API_PRODUCTO}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  });
  return res.json();
};

export const deleteProducto = async (id) => {
  const res = await fetch(`${API_PRODUCTO}/delete/${id}`, {
    method: "DELETE"
  });
  return res.json();
};
