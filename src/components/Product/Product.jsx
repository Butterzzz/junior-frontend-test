import React from 'react'
import './Product.css'

const Product = ({ item }) => {
  return (
    <li className="products__item">
      <article className="product">
        <div className="product__chevron-container">
          {item.isLimited && <p className="product__chevron product__chevron--limited">Limited</p>}
          {item.isNew && <p className="product__chevron product__chevron--new">New</p>}
        </div>
        <div className={`product__image product__image--${item.categoryType}`}></div>
        <div className="product__content">
          <p className="product__category">{item.categoryName}</p>
          <h3 className="product__title">{item.name}</h3>
          <p className="product__description">{item.description}</p>
          <div className="product__price-container">
            <p className="product__price">{`$${item.price}`}</p>
            <p className="product__discount">{item.discount && `Discount $${item.discount} per bag`}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Product
