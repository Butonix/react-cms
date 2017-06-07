import React, { PropTypes, Component } from 'react'
import _ from 'lodash'
import { NavLink, Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'actions/user'
import * as systemActionCreators from 'actions/system'

import Loading from 'components/Loading'
import LoginForm from 'components/LoginForm'
import { RemoteSubmitButton } from 'components/Buttons'

import './Header.scss'


class Header extends Component {

  handleLoginSuccess = () => {
    console.log('login success')
    const { actions } = this.props
    actions.hideDialog('Login')
  }

  handleLogin = (evt) => {
    evt.preventDefault()
    const { actions } = this.props
    actions.showDialog('Login', (
          <LoginForm
            onSubmit={this.props.actions.login}
            onSubmitSuccess={this.handleLoginSuccess}
          />
        ),
        [ <RemoteSubmitButton formId="login" /> ]
    )
    // actions.login('luca', 'adsada')
  }

  handleLogout = (evt) => {
    evt.preventDefault()
    const { actions } = this.props
    actions.logout()
  }

  handleNoAction = (evt) => {
    evt.preventDefault()
  }

  render() {
    // console.log(props.pages)
    const { pages, isFetching, currentUser } = this.props

    let links = []
    if (pages) {
      links = _.flatMap(pages, (p) => {
        return <NavLink key={p.slug} to={`/${p.slug}`}>{_.capitalize(p.title)}</NavLink>
      })
    }

    const LoginButton = () => {
      if (isFetching) {
        return <Link to="#" className="disabled" onClick={this.handleNoAction}><Loading outline/></Link>
      } else {
        return (
            currentUser
            ? <NavLink exact to="/profile" onClick={this.handleLogout}><i className="material-icons">person</i>{currentUser.name}</NavLink>
            : <Link to="/login" onClick={this.handleLogin}><i className="material-icons">lock</i>Login</Link>
        )
      }
    }

    return (
        <div className="lp-header">
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
  // console.log(state); // state
  // console.log(ownProps); // undefined
  return {
    currentUser: state.user.currentUser,
    isFetching: state.user.isFetching,
    userError: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ ...userActionCreators, ...systemActionCreators }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)