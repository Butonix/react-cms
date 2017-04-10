import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss';


const Header = () => (
  <div>
    <nav className="header-nav">
      <NavLink to="/netflix">Netflix</NavLink>
      <NavLink to="/zillow-group">Zillow Group</NavLink>
      <NavLink to="/yahoo">Yahoo</NavLink>
      <NavLink to="/modus-create">Modus Create</NavLink>
    </nav>
  </div>
)

export default Header