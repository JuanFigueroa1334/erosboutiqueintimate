import React from 'react'
import Banner from '../components/banner/Banner'
import Producthomeone from '../components/Producthomeone/Producthomeone'
import ProductsShowcase from '../components/ProductHomeShowCase/ProductHomeShowCase'
import ProductAlbumLayout from '../components/ProductAlbumLayout/ProductAlbumLayout'

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