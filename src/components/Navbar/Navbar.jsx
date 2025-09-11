import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo_v4.png"
import { useCart } from "../../context/CartContext";
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { Menu, X } from "lucide-react";

const MenuData = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Lubricantes",
    link: "/store?category=Lubricantes",
    subcategories: [
      { name: "Sexo Oral", link: "/store?subcategory=sexo-oral" },
      { name: "Saborizados", link: "/store?subcategory=saborizados" },
      { name: "Retardantes", link: "/store?subcategory=retardantes" },
      { name: "Neutros", link: "/store?subcategory=neutros" },
      { name: "Multiorgasmos", link: "/store?subcategory=multiorgasmos" },
      { name: "Masajes", link: "/store?subcategory=masajes" },
      { name: "Kit de Lubricantes", link: "/store?subcategory=kit-Lubricantes" },
      { name: "Estrechantes", link: "/store?subcategory=estrechantes" },
      { name: "Estimulantes", link: "/store?subcategory=estimulantes" },
      { name: "CUM", link: "/store?subcategory=cum" },
      { name: "Anales", link: "/store?subcategory=anales" },
      { name: "A prueba de agua", link: "/store?subcategory=a-prueba-agua" },
    ],
  },
  {
    id: 3,
    name: "Bondage",
    link: "/store?category=Bondage",
    subcategories: [
      { name: "Prendas Fetish Ellas", link: "/store?subcategory=Prendas_Fetish_Ellas" },
      { name: "Prendas Fetish El", link: "/store?subcategory=Prendas_Fetish_El" },
      { name: "Plumas y Cosquillas", link: "/store?subcategory=Plumas_Cosquillas" },
      { name: "Pinzas para pezones", link: "/store?subcategory=Pinzas_pezones" },
      { name: "Paletas nalgadas", link: "/store?subcategory=Paletas_nalgadas" },
      { name: "Mordaza", link: "/store?subcategory=Mordaza" },
      { name: "Latigos y Fustas", link: "/store?subcategory=Latigos_Fustas" },
      { name: "Kit Fetichistas", link: "/store?subcategory=Kit_Fetichistas" },
      { name: "Esposas y Amarres", link: "/store?subcategory=Esposas_Amarres" },
      { name: "Collares", link: "/store?subcategory=Collares" },
      { name: "Antifaces y Mascaras", link: "/store?subcategory=Antifaces_Mascaras" },
    ],  
  },
    {
    id: 4,
    name: "Juguetes",
    link: "/store?category=Juguetes",
     subcategories: [
      { name: "Vidradores", link: "/store?category=Juguetes" },
      { name: "Vidradores A control remoto", link: "/store?subcategory=vibradores-control-remoto" },
      { name: "Estimuladores Clitoriales", link: "/store?subcategory=estimuladores-clitoriales" },
      { name: "Electroestimulación", link: "/store?subcategory=Electroestimulacion" },
      { name: "Doble o Triple Estimulación", link: "/store?subcategory=doble-estimulacion" },
      { name: "Clásicos y Realistas ", link: "/store?subcategory=clasicos-realistas" },

    ],  
  },
  {
    id: 5,
    name: "Web-cam",
    link: "/store?category=Web-cam",
    subcategories: [
    ],
  },
  {
    id: 6,
    name: "Lenceria y Dizfraces",
    link: "/store?category=lenceria-dizfraces",
  },

  {
    id: 7,
    name: "Bienestar-sexual",
    link: "/store?category=Bienestar-sexual",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navbar = ({setSearchTerm}) => {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchTerm(e.target.value);
      navigate("/store");
    }
  };
  return (
    <div className="shadow-2xl relative z-40 bg-color-rosado">
        <div className="bg-rosado-envio py-2">
            <div className="text-center font-bold font-bold2">
                <p>ENVIO GRATIS POR COMPRAS SUPERIORES A $250.000</p>
            </div>
        </div>
        {/*upper navbar*/}
        <div className="">
            <div className="flex flex-col md:flex-row container justify-between items-center">
                <div className="grid grid-cols-1">
                    <a href="/" className='flex font-bold text-2xl sm:text-3xl gap-2 items-center'>
                        <img src={Logo} alt="Logo" className="font-bold h-16" />
                        EROS INTIMATE
                    </a>
                </div>
                {/* buqueda*/}
                <div className="grid grid-cols-1">
                    <div className="md:flex md:items-center md:gap-3 md:justify-between">
                      <input type="text"
                      placeholder="Buscar..."
                      onKeyDown={handleSearch}
                      className="w-[200px] sm:w-[200px] group-hover:w-[300px] border rounded-full border-gray-300 focus:outline-none focus:border-primary focus:border-1 focus:border-1 px-2 py-1 "/>
                      <div className="group flex items-center gap-3 divspace-between">
                        <Link to="/store">
                          <ShoppingBag size={24} />
                        </Link>
                        <Link to="/cart" className="relative">
                          <ShoppingCart size={24} />
                          {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                              {cart.length}
                            </span>
                          )}
                        </Link>
                        {/* Botón hamburguesa (solo en móviles) */}
                        <button
                          className="sm:hidden block"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        {/*lower navbar*/}
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {MenuData.map((data) => (
              <li key={data.id} className=" relative group py-2 ">
                <a href={data.link} className="inline-block px-4 text-cate duration-200 menu-categorias">
                    {data.name}
                </a>
                {/* Subcategorías (Dropdown) */}
                {data.subcategories && (
                  <ul className="absolute left-0 top-full hidden bg-rosado-subcategoria group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-50">
                    {data.subcategories.map((sub, index) => (
                      <li key={`${data.id}-${index}`} className="px-4 py-2 bg-rosado-hover-sub">
                        <a href={sub.link} className="block textBoldHover">
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))} 
          </ul>

          {/* Menú móvil desplegable */}
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden">
              <ul className="flex flex-col p-4">
                {MenuData.map((data) => (
                  <li key={data.id} className="py-2 border-b">
                    <details>
                      <summary
                        className="cursor-pointer font-medium list-none flex justify-between items-center"
                        onClick={(e) => {
                          const details = e.currentTarget.parentElement;

                          // Si ya está abierto, permite redirigir
                          if (details.open || data.id == 1) {
                            window.location.href = data.link; // ✅ redirección
                          } else {
                            e.preventDefault(); // ✅ evita navegar en el primer clic
                            details.open = true; // ✅ abre el menú
                          }
                        }}
                      >
                        {data.name}
                      </summary>
                      {data.subcategories && (
                        <ul className="pl-4">
                          {data.subcategories.map((sub, index) => (
                            <li key={`${data.id}-${index}`} className="py-1">
                              <a href={sub.link}>{sub.name}</a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
    </div>
  )
}

export default Navbar;