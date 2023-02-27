import React from 'react'
import './Filters.css'

const Filters = () => {
  return (
    <section className="filters">
      <div className="filters__container">
        <div className="filters__title">
          <span className="filters__title-icon"></span>
          <h3 className="filters__title-caption">Filters</h3>
        </div>
        <div className="filters__wrapper">
          <div className="filters__category category">
            <h3 className="category__title">Category</h3>
            <ul className="category__list">
              <li className="category__item">
                <a href="#" className="category__link category__link--active">
                  All
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Canola
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Corn
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Oats
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Wheat
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link">
                  Soybeans
                </a>
              </li>
              <li className="category__item">
                <a href="#" className="category__link category__link--disabled">
                  Barley
                </a>
              </li>
            </ul>
          </div>
          <div className="filters__status status">
            <h3 className="status__title">Status</h3>
            <div className="status__wrapper">
              <div>
                <input className="status__checkbox" id="limited" type="checkbox" />
                <label htmlFor="limited">Limited</label>
              </div>
              <div>
                <input className="status__checkbox" id="is_new" type="checkbox" />
                <label htmlFor="is_new">Is new</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Filters
