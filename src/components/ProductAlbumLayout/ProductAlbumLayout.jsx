import React from "react";
import Img1 from "../../assets/img/imgsHome/img-setintimo-1.jpeg";
import Img2 from "../../assets/img/imgsHome/img-setintimo-2.jpeg";
import Img3 from "../../assets/img/imgsHome/img-setintimo-3.jpeg";

const ProductAlbumLayout = () => {
  const images = {
    img1: Img1,
    img2: Img2,
    img3: Img3,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl h-[500px] gap-[1px]">
        {/* Columna izquierda */}
        <div className="w-[30%] flex flex-col gap-[1px]">
          <img
            src={images.img1}
            alt="Imagen 1"
            className="w-full h-1/2 object-cover"
          />
          <img
            src={images.img2}
            alt="Imagen 2"
            className="w-full h-1/2 object-cover"
          />
        </div>

        {/* Imagen derecha */}
        <div className="w-[70%]">
          <img
            src={images.img3}
            alt="Imagen 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductAlbumLayout;
