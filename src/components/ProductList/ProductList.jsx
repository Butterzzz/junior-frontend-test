import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'

const ProductList = () => {
  return (
    <section className="products">
      <ul className="products__list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>
    </section>
  )
}

export default ProductList
