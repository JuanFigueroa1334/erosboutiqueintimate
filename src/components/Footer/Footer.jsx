import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const StyleFooter = {
    backgroundColor: '#232323',
    color:'#fff',
}
const FooterLinks = [
    {
        title: "Tienda",
        link: "/#"
    },
    {
        title: "Categorias",
        link: "/#"
    },
    {
        title: "Nosotros",
        link: "/#"
    },
    {
        title: "Contactenos",
        link: "/#"
    }
]
const Footer = () => {
  return (
    <div style={StyleFooter}>
        <div className="container styleFooter">
            <div className="flex justify-between px-{30px}">
                <div>
                    <h2 className="font-bold">Accesos directos</h2>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link)=>(
                            <li>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-center">
                    <h1 className="font-bold">Siguenos</h1>
                    <h2>en nuestras redes sociales</h2>
                    <div className="flex gap-3 justify-center pt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold">Servivio al Cliente</h2>
                    <div className="flex flex-col gap-3">
                        <a href="">Garantías y Devoluciones</a>
                        <a href="">Políticas de Privacidad</a>
                        <a href="">Envíos discretos</a>
                    </div>
                </div>
            </div>
        </div>            
        <div className="text-center py-8"> 
            <p>Eros Intimate Boutique | erosintimateboutique@gmail.com | +57 3241505065</p>
        </div>
    </div>
  )
}

export default Footer