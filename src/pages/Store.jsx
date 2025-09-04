import { useLocation } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import Img1 from "../assets/img/CategoriasProduct/sexo-oral/cherry.webp";
import Img2 from "../assets/img/CategoriasProduct/sexo-oral/concha.webp";
import Img3 from "../assets/img/CategoriasProduct/sexo-oral/garganta-sen-intimo.jpg";
import Img4 from "../assets/img/CategoriasProduct/sexo-oral/gomas.webp";
import Img5 from "../assets/img/CategoriasProduct/sexo-oral/sen-intimo.jpg";

// Ejemplo de productos (puedes ampliar esta lista)
const sampleProducts = [
  { id: 1, name: 'Lencería Roja Sexy', category:'Lubricantes', subcategory:'sexo-oral', description: 'Conjunto sensual de encaje rojo, talla única.', price: 149.99, image: Img1 },
  { id: 2, name: 'Vibrador Clásico', category:'Lubricantes', subcategory:'sexo-oral', description: 'Vibrador de silicona premium, 7 velocidades.', price: 89.90, image: Img2 },
  { id: 3, name: 'Aceite de Masaje', category:'Lubricantes', subcategory:'sexo-oral', description: 'Aceite comestible con aroma a vainilla.', price: 29.50, image: Img3 },
  { id: 4, name: 'Plug Anal Básico', category:'Lubricantes', subcategory:'sexo-oral', description: 'Juguete ergonómico para principiantes.', price: 49.99, image: Img4 },
  { id: 5, name: 'Body de Encaje Negro', category:'Lubricantes', subcategory:'sexo-oral', description: 'Elegancia y sensualidad combinadas.', price: 119.00, image: Img5 },
  { id: 6, name: 'Anillo Vibrador', category:'', description: 'Para intensificar el placer en pareja.', price: 39.99, image: 'https://via.placeholder.com/200x250?text=Anillo+Vibrador' },
];

const Store = ({ searchTerm }  ) => {
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");

  useEffect(() => {
    if (selectedCategory) {
      setFilter(selectedCategory);
    } else if (searchTerm) {
      setFilter(searchTerm);
    }
  }, [selectedCategory, searchTerm]);

  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filteredProducts = sampleProducts.filter(product =>
    (filter ? product.category?.toLowerCase().includes(filter.toLowerCase()) : true) ||
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-shop pt-5 bg-white min-h-screen bg-color-rosado">
      <div className="container pb-8">
        <h2 className="tituloFiltro">Tu filtro: {searchTerm}</h2>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row gap-6">
        
        {/* Filtros 
        <div className="w-full sm:w-1/4">
          <h2 className="text-xl font-bold mb-2">Filtrar</h2>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={filter}
            onChange={e => {
              setFilter(e.target.value);
              setCurrentPage(1); // reset page on new search
            }}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>*/}

        {/* Productos */}
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map(product => (
              <div
                key={product.id}
                className="card-product border border-gray-200 shadow-md rounded-[20px] p-3 flex flex-col items-center text-center bg-white transition hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[250px] object-cover rounded-md mb-4"
                />
                <div className="mb-2">
                  <h1 className="text-lg font-bold">{product.name}</h1>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-md font-semibold mt-2 text-red-600">${product.price.toFixed(2)}</p>
                </div>
                <button className="mt-auto bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
              >
                Anterior
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 border rounded hover:bg-pink-100 ${currentPage === i + 1 ? 'bg-pink-600 text-white' : ''}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Store;
