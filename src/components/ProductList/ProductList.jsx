import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'
import { useProductList } from './useProductList'

const ProductList = () => {
  const { items } = useProductList()
  return (
    <section className="products">
      <ul className="products__list">
        {items.map(item => (
          <Product key={item.id} item={item} />
        ))}
      </ul>
    </section>
  )
}

export default ProductList
