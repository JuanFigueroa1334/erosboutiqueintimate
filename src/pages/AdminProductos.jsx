import React, { useEffect, useState } from "react";
import {
  getProductos,
  addProducto,
  updateProducto,
  deleteProducto,
} from "../services/productoService";


const AdminProductos = () => {
  const [productos, setProductos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    costo: "",
    marca: "",
    imagenes: [],
  });

  const [newImageUrl, setNewImageUrl] = useState("");

  // PAGINACIÓN
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(productos.length / itemsPerPage);

  const cargarProductos = async () => {
    const data = await getProductos();
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("¿Eliminar este producto?")) {
        await deleteProducto(id);
        cargarProductos();
    }
  };

  const handleOpenModal = (producto = null) => {
    if (producto) {
      setEditing(producto.id);
      setForm({
        ...producto,
        imagenes: producto.imagenes || [],
      });
    } else {
      setEditing(null);
      setForm({
        nombre: "",
        descripcion: "",
        precio: "",
        costo: "",
        marca: "",
        imagenes: [],
      });
    }
    setModalOpen(true);
  };

  const handleAddImage = () => {
    if (newImageUrl.trim() !== "") {
      setForm({
        ...form,
        imagenes: [...form.imagenes, { url_imagen: newImageUrl }],
      });
      setNewImageUrl("");
    }
  };

  const handleDeleteImage = (index) => {
    const updated = [...form.imagenes];
    updated.splice(index, 1);
    setForm({ ...form, imagenes: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      await updateProducto(editing, form);
    } else {
      await addProducto(form);
    }

    setModalOpen(false);
    cargarProductos();
  };

  const paginated = productos.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Administrar Productos
      </h1>

      {/* Botón Nuevo */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => handleOpenModal()}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700"
        >
          + Nuevo Producto
        </button>
      </div>

      {/* Tabla */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Nombre</th>
              <th className="p-3 text-left">Marca</th>
              <th className="p-3 text-left">Precio</th>
              <th className="p-3 text-left">Stock</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((p) => (
              <tr key={p.id} className="border-b hover:bg-gray-100">
                <td className="p-3">{p.nombre}</td>
                <td className="p-3">{p.marca}</td>
                <td className="p-3">${p.precio}</td>
                <td className="p-3">{p.stock}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleOpenModal(p)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg mr-2"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center mt-5">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-3 py-2 bg-gray-300 rounded-l-lg"
        >
          ◀
        </button>
        <span className="px-4 py-2 bg-white shadow-md">
          {page} / {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-3 py-2 bg-gray-300 rounded-r-lg"
        >
          ▶
        </button>
      </div>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed z-[100] inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4">
              {editing ? "Editar" : "Nuevo"} Producto
            </h2>

            <form onSubmit={handleSubmit}>
              {/* Inputs normales */}
              <input
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="Nombre"
                value={form.nombre}
                onChange={(e) =>
                  setForm({ ...form, nombre: e.target.value })
                }
              />

              <input
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="Descripción"
                value={form.descripcion}
                onChange={(e) =>
                  setForm({ ...form, descripcion: e.target.value })
                }
              />

              <input
                type="number"
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="Precio"
                value={form.precio}
                onChange={(e) =>
                  setForm({ ...form, precio: e.target.value })
                }
              />

              <input
                type="number"
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="Costo"
                value={form.costo}
                onChange={(e) =>
                  setForm({ ...form, costo: e.target.value })
                }
              />

              <input
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="Marca"
                value={form.marca}
                onChange={(e) =>
                  setForm({ ...form, marca: e.target.value })
                }
              />
              <input
                type="number"
                className="w-full mb-3 p-2 border rounded-lg"
                placeholder="stock"
                value={form.stock}
                onChange={(e) =>
                  setForm({ ...form, stock: e.target.value })
                }
              />


              {/* IMÁGENES */}
              <label className="font-semibold">Imágenes (URLs):</label>

              <div className="flex gap-2 mb-3">
                <input
                  className="flex-1 p-2 border rounded-lg"
                  placeholder="https://url-de-la-imagen.com/img.jpg"
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleAddImage}
                  className="px-3 py-2 bg-green-600 text-white rounded-lg"
                >
                  +
                </button>
              </div>

              {/* LISTA DE IMÁGENES */}
              <div className="mb-3">
                {form.imagenes.map((img, i) => (
                  <div
                    key={i}
                    className="bg-gray-100 p-2 rounded-lg mb-2 flex justify-between"
                  >
                    <span className="truncate">{img.url_imagen}</span>
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(i)}
                      className="text-red-600"
                    >
                      ✖
                    </button>
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-lg mt-3"
              >
                Guardar
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-gray-500 text-white py-2 rounded-lg mt-2"
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProductos;
