import { useLocation } from "react-router-dom";
import React, { useState, useEffect  } from 'react';
import { useCart } from "../context/CartContext";
//categoria sexo-oral
import Img1 from "../assets/img/CategoriasProduct/sexo-oral/cherry.webp";
import Img2 from "../assets/img/CategoriasProduct/sexo-oral/concha.webp";
import Img3 from "../assets/img/CategoriasProduct/sexo-oral/garganta-sen-intimo.jpg";
import Img4 from "../assets/img/CategoriasProduct/sexo-oral/gomas.webp";
import Img5 from "../assets/img/CategoriasProduct/sexo-oral/sen-intimo.jpg";


// Ejemplo de productos (puedes ampliar esta lista)
const sampleProducts = [
    //categoria sexo-oral
    { id: 1, name: 'Gummies Vi King Cherry', category:'Lubricantes', subcategory:'sexo-oral', description: '', 
    price: '30.000', image: Img1 },
    { id: 2, name: 'Concha Gummies Vi King', category:'Lubricantes', subcategory:'sexo-oral', description: '', 
    price: '10.000', image: Img2 },
    { id: 3, name: 'Garganta Profunda Desensibilizante para Sexo Oral x 15 ml by Sen întimo', category:'Lubricantes', subcategory:'sexo-oral', description: '', 
    price: '36.900', image: Img3 },
    { id: 4, name: 'Anillos Donas x 3 Ud Gummies Vi King Cherry', category:'Lubricantes', subcategory:'sexo-oral', description: '', 
    price: '30.000', image: Img4 },
    { id: 5, name: 'Chocolate Body Paint x 30 ml by Sen Intimo', category:'Lubricantes', subcategory:'sexo-oral', description: '', 
    price: '25.900', image: Img5 },
     //categoria saborizados
    { id: 1, name: 'Lubricante Íntimo Cafe Moka Sensación Caliente x 30 ml by Sen Íntimo', category:'Lubricantes', subcategory:'saborizados', description: '', 
    price: '24.900', image: Img1 },
    { id: 1, name: '', category:'Lubricantes', subcategory:'saborizados', description: '', 
    price: '24.900', image: Img1 },
    
  
];


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
  const productsPerPage = 10;

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
      <div className="container pb-8">
        <h2 className="tituloFiltro">Tu filtro: {selectedCategory || selectedSubCategory || searchTerm || "Todos"}</h2>
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
