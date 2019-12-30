import React from 'react';

import Product from './Product.js'
import productsData from './productsData'

function MyApp() {
  const productComponents = productsData.map(item => <Product key={item.id} product={item} />)
  console.log(productComponents) //cria a prop.product passando todo item do array de objetos de productsData

  return (
    <div>
      {productComponents}
    </div>
  )
}

export default MyApp;