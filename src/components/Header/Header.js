import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import { NavLink, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'actions/user'

import './Header.scss'


class Header extends Component {

  handleLogin = (evt) => {
    evt.preventDefault();
    const { actions } = this.props
    actions.login('luca', 'adsada')
  }

  handleLogout = (evt) => {
    evt.preventDefault();
    const { actions } = this.props
    actions.logout()
  }

  render() {
    // console.log(props.pages)
    const { pages, isFetching, currentUser, userError } = this.props

    let links = []
    if (pages) {
      links = _.flatMap(pages, (p) => {
        return <NavLink key={p.slug} to={`/${p.slug}`}>{_.capitalize(p.title)}</NavLink>
      })
    }

    const LoginButton = () => {
      if (isFetching) {
        return <Link to="/login" disabled><div className="loader" /></Link>
      } else {
        return (
            currentUser
            ? <NavLink exact to="/profile" onClick={this.handleLogout}><i className="material-icons">person</i>{currentUser.username}</NavLink>
            : <Link to="/login" onClick={this.handleLogin}><i className="material-icons">lock</i>Login</Link>
        )
      }
    }

    return (
        <div>
          <nav className="header-nav">
            <NavLink exact to="/"><i className="material-icons">home</i>Home</NavLink>
            {links}
            <LoginButton />
          </nav>
        </div>
    )
  }
}

Header.propTypes = {
  pages: PropTypes.object,
  currentUser: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  userError: PropTypes.object,
  actions: PropTypes.object.isRequired
}

Header.defaultProps = {
  pages: null,
  currentUser: null,
  userError: null
}

const mapStateToProps = (state, ownProps = {}) => {
  console.log(state); // state
  console.log(ownProps); // undefined
  return {
    currentUser: state.user.currentUser,
    isFetching: state.user.isFetching,
    userError: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(userActionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)