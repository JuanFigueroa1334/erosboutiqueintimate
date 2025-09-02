import React from 'react'
import img1 from "../../assets/img/banner/banner_rojo_set.png"
import img2 from "../../assets/img/banner/img-banner-2.png"
import img3 from "../../assets/img/banner/img-banner-3.webp"
import img4 from "../../assets/img/banner/img-banner-4.webp"
import Slider from "react-slick";
const imagenBanner = [
    {
        id: 1,
        img: img1,
        title:"",
        description:""
    },
    {
        id: 2,
        img: img2,
        title:"",
        description:""
    },
    {
        id: 3,
        img: img3,
        title:"",
        description:""
    },
    {
        id: 4,
        img: img4,
        title:"",
        description:""
    },
]
const Banner = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };
  return (
    <div className='relative overflow-hidden min-h-[500px] sm:min-h-[600px]'>
        <div className="">
            <Slider {...settings}>
                {imagenBanner.map((data) => (
                    <div>
                                <img
                                src={data.img}
                                alt={`Banner ${data.id}`}
                                className="w-full h-[500px] sm:h-[600px] object-cover object-top"
                                />
                    </div> 
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Banner