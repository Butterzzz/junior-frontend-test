import React, { useState, useEffect } from 'react'
import './Filters.css'

const Filters = ({ filter, updateFilter }) => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  function handleCategorySelect(name) {
    setSelectedCategory(name)
  }

  useEffect(() => {
    fetch('/api/category')
      .then(res => res.json())
      .then(categories => setCategories(categories))
      .catch(err => {
        console.log(err)
      })
  }, [])
  const handleFilterIsNewUpdate = () => updateFilter({ isNew: !filter.isNew })
  const handleFilterIsLimitedUpdate = () => updateFilter({ isLimited: !filter.isLimited })
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
            <div className="category__container">
              <button
                className={`category__button ${selectedCategory === 'All' ? 'category__button--active' : ''}`}
                onClick={() => handleCategorySelect('All')}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category__button ${selectedCategory === category.name ? 'category__button--active' : ''}`}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="filters__status status">
            <h3 className="status__title">Status</h3>
            <div className="status__wrapper">
              <div>
                <input
                  className="status__checkbox"
                  id="is_limited"
                  type="checkbox"
                  onChange={handleFilterIsLimitedUpdate}
                  checked={filter.isLimited}
                />
                <label htmlFor="is_limited">Limited</label>
              </div>
              <div>
                <input
                  className="status__checkbox"
                  id="is_new"
                  type="checkbox"
                  onChange={handleFilterIsNewUpdate}
                  checked={filter.isNew}
                />
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
