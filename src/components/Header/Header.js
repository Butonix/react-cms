import React, { PropTypes } from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import './Header.scss'


const Header = (props) => {
  // console.log(props.pages)
  const { pages } = props
  let links = []
  if (pages) {
    links = _.flatMap(props.pages, (p) => {
      return <NavLink key={p.slug} to={`/${p.slug}`}>{_.capitalize(p.title)}</NavLink>
    })
  }
  return (
    <div>
      <nav className="header-nav">
        <NavLink exact to="/"><i className="material-icons">home</i>Home</NavLink>
        {links}
      </nav>
    </div>
  )
}

Header.propTypes = {
  pages: PropTypes.object
}

Header.defaultProps = {
  pages: null
}

export default Header