import React from 'react'
import Logo from "../../assets/img/logo_v4.png"
import { useNavigate } from 'react-router-dom';
const Menu = [
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
      { name: "Prendas Fetish Ellas", link: "/store?subcategory=sexo-oral" },
      { name: "Prendas Fetish El", link: "/store?subcategory=saborizados" },
      { name: "Plumas y Cosquillas", link: "/store?subcategory=retardantes" },
      { name: "Pinzas para pezones", link: "/store?subcategory=neutros" },
      { name: "Paletas nalgadas", link: "/store?subcategory=multiorgasmos" },
      { name: "Mordaza", link: "/store?subcategory=masajes" },
      { name: "Latigos y Fustas", link: "/store?subcategory=kit-Lubricantes" },
      { name: "Kit Fetichistas", link: "/store?subcategory=estrechantes" },
      { name: "Esposas y Amarres", link: "/store?subcategory=estimulantes" },
      { name: "Collares", link: "/store?subcategory=cum" },
      { name: "Antifaces y Mascaras", link: "/store?subcategory=anales" },
    ],  
  },
    {
    id: 4,
    name: "Juguetes",
    link: "/store?category=Juguetes",
     subcategories: [
      { name: "Vidradores", link: "/store?subcategory=Vibradores" },
      { name: "Vidradores A control remoto", link: "/store?subcategory=vibradores-control-remoto" },
      { name: "Estimuladores Clitoriales", link: "/store?subcategory=estimuladores-clitoriales" },
      { name: "Electroestimulación", link: "/store?subcategory=Electroestimulacion" },
      { name: "Doble o Triple Estimulación", link: "/store?subcategory=doble-estimulaciom" },
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
    id: 6,
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
            <div className="flex container justify-between items-center">
                <div>
                    <a href="/" className='flex font-bold text-2xl sm:text-3xl gap-2 items-center'>
                        <img src={Logo} alt="Logo" className="font-bold h-16" />
                        EROS INTIMATE
                    </a>
                </div>
                {/* buqueda*/}
                <div>
                    <div className="group">
                        <input type="text"
                         placeholder="Buscar..."
                         onKeyDown={handleSearch}
                         className="w-[200px] sm:w-[200px] group-hover:w-[300px] border rounded-full border-gray-300 focus:outline-none focus:border-primary focus:border-1 focus:border-1 px-2 py-1 "/>
                    </div>
                </div>
            </div>
        </div>
        {/*lower navbar*/}
        <div data-aos="zoom-in" className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id} className=" relative group py-2 ">
                <a href={data.link} className="inline-block px-4 text-cate duration-200 menu-categorias">
                    {data.name}
                </a>
                {/* Subcategorías (Dropdown) */}
                {data.subcategories && (
                  <ul className="absolute left-0 top-full hidden bg-rosado-subcategoria group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-50">
                    {data.subcategories.map((sub, index) => (
                      <li key={index} className="px-4 py-2 bg-rosado-hover-sub">
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
        </div>
    </div>
  )
}

export default Navbar;