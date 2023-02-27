import React from 'react'
import './Product.css'

const Product = () => {
  return (
    <li className="products__item">
      <article className="product">
        <div className="product__chevron-container">
          <p className="product__chevron product__chevron--limited">Limited</p>
          <p className="product__chevron product__chevron--new">New</p>
        </div>
        <div className="product__image"></div>
        <div className="product__content">
          <p className="product__category">Canola</p>
          <h3 className="product__title">CS2300</h3>
          <p className="product__description">Roundup Ready® Canola Hybrid</p>
          <div className="product__price-container">
            <p className="product__price">$34.00</p>
            <p className="product__discount">Discount $2 per bag</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Product
