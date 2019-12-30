import React from 'react';

import Product from './Product.js'
import productsData from './productsData'

function MyApp() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
  console.log(productComponents)

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default MyApp;