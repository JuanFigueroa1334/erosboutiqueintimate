import React from 'react'
import Banner from '../components/Banner/Banner.jsx'
import Producthomeone from '../components/Producthomeone/Producthomeone.jsx'
import ProductsShowcase from '../components/ProductHomeShowCase/ProductHomeShowCase.jsx'
import ProductAlbumLayout from '../components/ProductAlbumLayout/ProductAlbumLayout.jsx'

const home = () => {
  return (
    <div>
        <Banner/>
        <Producthomeone/>
        <ProductsShowcase/>
        <ProductAlbumLayout/>
    </div>
  )
}

export default home