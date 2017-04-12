import React, { PropTypes } from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import './Header.scss';


const Header = (props) => {
  const links = props.pages.map((p) => {
    return <NavLink key={p.slug} to={`/${p.slug}`}>{_.capitalize(p.title)}</NavLink>
  })
  return (
    <div>
      <nav className="header-nav">
        <NavLink exact to="/">Home</NavLink>
        {links}
      </nav>
    </div>
  )
}

Header.propTypes = {
  pages: PropTypes.array
}

Header.defaultProps = {
  pages: []
}

export default Header