import React, { PropTypes, Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import * as userActionCreators from 'actions/user'
import * as systemActionCreators from 'actions/system'

import './Footer.scss'


class Footer extends Component {
  render() {
    const { currentUser } = this.props
    const classes = classNames({
      'lp-footer': true,
      'lp-footer-primary': currentUser !== null
    })
    return (
      <div className={ classes }>
        <div className="list">
          <div className="list-item">Copyright © 2017 Luca Pulira - 7APP</div>
          <div className="list-item"><a href="https://github.com/lp741/react-cms">GitHub <i className="fa fa-github" aria-hidden="true" /></a></div>
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  currentUser: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  userError: PropTypes.object,
  actions: PropTypes.object.isRequired
}

Footer.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer)