import React from 'react'
import Img1 from "../../assets/img/imgsHome/img-setintimo-1.jpeg";
import Img2 from "../../assets/img/imgsHome/img-setintimo-2.jpeg";
import Img3 from "../../assets/img/imgsHome/img-setintimo-3.jpeg";
const ProductIntimate = [
  {
    id: 1,
    img: Img1,
    title: "Description set intimo 1",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Img2,
    title: "Description set intimo ",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Img3,
    title: "Description set intimo 3",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Producthomeone = () => {
  return (
    <div>
        <div className="container container-style">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {ProductIntimate.map((data)=> (
                    <div
                        data-aos="zoom-in"
                        className="rounded-2xl bg-white border-r-25 dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                    >
                        <img src={data.img} alt={data.title} className="border-r-25 drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.5)]"/>
                    </div>  
                ))}
            </div>
        </div>
    </div>
  )
}

export default Producthomeone