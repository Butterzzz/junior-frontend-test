import React, { useState } from 'react'
import './Header.css'

const Header = ({ updateSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = e => {
    setSearchQuery(e.target.value)
    updateSearchQuery(e.target.value)
  }

  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__title">Products</h2>
        <div className="header__search">
          <span className="header__search-icon"></span>
          <input
            className="header__search-input"
            type="text"
            placeholder="Search among products"
            value={searchQuery}
            onChange={handleChange}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
