import { useLocation } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import { useCart } from "../context/CartContext";
//categoria sexo-oral
import { sampleProducts } from "../data/Products.js";


const Store = ({ searchTerm }  ) => {
  const { addToCart } = useCart();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const selectedSubCategory = queryParams.get("subcategory");

  useEffect(() => {
     if (searchTerm && !selectedCategory && !selectedSubCategory) {
        setFilter(searchTerm);
    } else {
        setFilter("");
    }
  }, [selectedCategory, selectedSubCategory, searchTerm]);

  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 52;

  const filteredProducts = sampleProducts.filter(product => {
    // Filtrado por categoría
    const matchCategory = selectedCategory 
        ? product.category?.toLowerCase() === selectedCategory.toLowerCase()
        : true;

    // Filtrado por subcategoría
    const matchSubcategory = selectedSubCategory 
        ? product.subcategory?.toLowerCase() === selectedSubCategory.toLowerCase()
        : true;

    // Filtrado por búsqueda libre
    const matchSearch = filter
        ? product.name.toLowerCase().includes(filter.toLowerCase()) ||
        product.description.toLowerCase().includes(filter.toLowerCase())
        : true;

    return matchCategory && matchSubcategory && matchSearch;
    });


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
      <div className="container pb-8 flex divspace-between">
        <h2 className="tituloFiltro">Tu filtro: {selectedCategory || selectedSubCategory || searchTerm || "Todos"}</h2>
        <a href="/store">Ver todos los productos</a>
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
                  <p className="text-md font-semibold mt-2 text-red-600">${product.price}</p>
                </div>
                
                <button
                onClick={() => addToCart(product)}
                className="mt-auto bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition"
                >
                Agregar al carrito
                </button>
              </div>
            ))}
          </div>

          {/* Paginación */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="flex gap-2 overflow-x-auto max-w-full px-4 py-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-md">
                
                {/* Botón Anterior */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50 shrink-0"
                >
                  Anterior
                </button>

                {/* Números de página con scroll */}
                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 border rounded hover:bg-pink-100 shrink-0 ${
                        currentPage === i + 1 ? 'bg-pink-600 text-white' : ''
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {/* Botón Siguiente */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded hover:bg-gray-200 disabled:opacity-50 shrink-0"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Store;
