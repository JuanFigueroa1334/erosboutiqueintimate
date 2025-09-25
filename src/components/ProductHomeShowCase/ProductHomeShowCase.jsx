import React, { useState } from "react";
import Img1 from "../../assets/img/imgsHome/img-setintimo-1.jpeg";
import Img2 from "../../assets/img/imgsHome/img-setintimo-2.jpeg";
import Img3 from "../../assets/img/imgsHome/img-setintimo-3.jpeg";
import bondage_1 from "../../assets/img/imgsHome/bondage_1.webp";
import bondage_2 from "../../assets/img/imgsHome/bondage_2.webp";
import bondage_3 from "../../assets/img/imgsHome/bondage_3.webp";
import Imgsldr1 from "../../assets/img/imgsHome/img-sldr-1.png";
import Imgsldr2 from "../../assets/img/imgsHome/img-sldr-2.png";
import Imgsldr3 from "../../assets/img/imgsHome/img-sldr-3.png";
import Imgsldr4 from "../../assets/img/imgsHome/img-sldr-4.png";
import Imgsldr5 from "../../assets/img/imgsHome/img-sldr-5.webp";
const products = [
  {
    name: "Lencerias",
    description: "Resalta tu belleza con elegancia y sensualidad",
    images: [
      bondage_1,
      bondage_2,
      bondage_3,
    ],
  },
  {
    name: "Vibradores",
    description: "Descubre el placer que mereces, a tu manera.",
    images: [
      Imgsldr1,
      Imgsldr2,
      Imgsldr3,
      Imgsldr4,
      Imgsldr5
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
      <div className="relative contimg w-full h-56 mb-4">
        <img
          src={product.images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
          className="w-full h-full object-cover rounded-lg img100"
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
