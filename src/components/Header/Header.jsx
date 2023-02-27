import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__title">Products</h2>
        <div className="header__search">
          <span className="header__search-icon"></span>
          <input className="header__search-input" type="text" placeholder="Search among products" />
        </div>
      </div>
    </header>
  )
}

export default Header
