import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
const StyleFooter = {
    backgroundColor: '#232323',
    color:'#fff',
}
const FooterLinks = [
  { id: 1, title: "Tienda", link: "/#" },
  { id: 2, title: "Categorias", link: "/#" },
  { id: 3, title: "Nosotros", link: "/#" },
  { id: 4, title: "Contactenos", link: "/#" },
];
const Footer = () => {
  return (
    <div style={StyleFooter}>
        <div className="container styleFooter">
            <div className="flex flex-col md:flex-row justify-between px-[30px] text-center">
                <div>
                    <h2 className="font-bold">Accesos directos</h2>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((link)=>(
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold">Siguenos</h1>
                    <h2>en nuestras redes sociales</h2>
                    <div className="flex gap-3 justify-center pt-6">
                        <a href="https://www.instagram.com/erosboutiqueintimate?igsh=MTBkbzEzaDRwYW44bg==">
                            <FaInstagram className="text-3xl" />
                        </a>
                        <a href="https://www.facebook.com/share/17BsKYm7Sd/?mibextid=wwXIfr">
                            <FaFacebook className="text-3xl" />
                        </a>
                        <a href="https://www.tiktok.com/@erosboutiqueintim?lang=es">
                            <FaTiktok className="text-3xl" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="font-bold">Servivio al Cliente</h2>
                    <div className="flex flex-col gap-3">
                        <a href="">Garantías y Devoluciones</a>
                        <a href="/Politicas-Tratamiento-de-Datos">Políticas de Tratamiento <br/> de Datos Personales</a>
                        <a href="">Envíos discretos</a>
                    </div>
                </div>
            </div>
        </div>            
        <div className="text-center py-8"> 
            <p>Eros Intimate Boutique | contacto@erosboutiqueintimate.com | +57 324 150 50 65</p>
        </div>
    </div>
  )
}

export default Footer