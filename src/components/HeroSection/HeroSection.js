import React, { PropTypes } from 'react'
import {
  Link
} from 'react-router-dom'
import logo from 'assets/img/logo.svg'
import './HeroSection.scss'

const HeroSection = (props) => {
  const { title } = props;
  return (
      <div className="App-header">
        <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
        <h2>{title}</h2>
      </div>
  )
}


HeroSection.propTypes = {
  title: PropTypes.string
}

HeroSection.defaultProps = {
  title: ''
}


export default HeroSection;