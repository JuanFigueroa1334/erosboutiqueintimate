import React, { useContext } from 'react';

import { AuthContext } from "../context/AuthContext";
import Banner from '../components/Banner/Banner.jsx'
import Producthomeone from '../components/Producthomeone/Producthomeone.jsx'
import ProductsShowcase from '../components/ProductHomeShowCase/ProductHomeShowCase.jsx'
import ProductAlbumLayout from '../components/ProductAlbumLayout/ProductAlbumLayout.jsx'
import OpinionForm from '../components/OpinionForm/OpinionForm.jsx'

const Home = () => {
  const { user } = useContext(AuthContext); 
  const usuarioId = user?.id || null;

  return (
    <div>
        <Banner/>
        <Producthomeone/>
        <ProductsShowcase/>
        <ProductAlbumLayout/>
        <OpinionForm usuarioId={usuarioId} />
    </div>
  )
}

export default Home