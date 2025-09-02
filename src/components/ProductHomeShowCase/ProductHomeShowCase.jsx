import React, { useState } from "react";
import Img1 from "../../assets/img/imgsHome/img-setintimo-1.jpeg";
import Img2 from "../../assets/img/imgsHome/img-setintimo-2.jpeg";
import Img3 from "../../assets/img/imgsHome/img-setintimo-3.jpeg";
const products = [
  {
    name: "Lencerias",
    description: "Este es el primer producto con una breve.",
    images: [
      Img1,
      Img2,
      Img3,
    ],
  },
  {
    name: "Vibradores",
    description: "Este es el segundo producto con una breve descripción.",
    images: [
      "https://via.placeholder.com/300x200?text=Producto+2+Imagen+1",
      "https://via.placeholder.com/300x200?text=Producto+2+Imagen+2",
      "https://via.placeholder.com/300x200?text=Producto+2+Imagen+3",
    ],
  },
];

const ProductSlider = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  const prevImage = () =>
    setCurrentImage((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );

  return (
    <div className="bg-white text-center shadow-lg rounded-xl p-4 w-full md:w-1/2">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="relative w-full h-56 mb-4">
        <img
          src={product.images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

const ProductsShowcase = () => {
  return (
    <div className=" p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {products.map((product, index) => (
          <ProductSlider key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsShowcase;
