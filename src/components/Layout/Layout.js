import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'actions/user'
import * as systemActionCreators from 'actions/system'

import Page from 'components/Page'
import Header from 'components/Header'
import Footer from 'components/Footer'
import HeroSection from 'components/HeroSection'
import Dialog from 'components/Dialog'
import config from 'constants'
import PageObject from 'libs/PageObject'
import logo from 'assets/img/react-md-cms-logo_150.png'

import './Layout.scss'

// console.log('config', config)
const { pages } = config
const { name, description } = config.appConfig

const defaultData = new PageObject({ title: _.startCase(name), slug: name, body: description })

class Layout extends Component {

  handleCloseDialog = (evt) => {
    evt.preventDefault();
    const { actions } = this.props;
    actions.hideDialog()
  }

  render() {

    const { showDialog, dialogNode } = this.props

    return (
      <div className="App">
        <Helmet
            titleTemplate="%s - 7APP"
            defaultTitle="react-md-cms"
        >
          <meta charSet="utf-8" />
          <link rel="canonical" href="http://localhost:3000" />
          <link rel="icon" href={logo} />
        </Helmet>
        <Header pages={pages}/>
        <HeroSection title={name}/>
        <Route exact path="/" component={Page} defaultData={defaultData} pages={pages}/>
        <Route path="/:id" component={Page} defaultData={defaultData} pages={pages}/>
        <Footer />
        <ReactCSSTransitionGroup
            component="div"
            className="lp-dialog"
            transitionName="modal"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
        >
          {
            showDialog
            && (
                <Dialog
                    onClose={this.handleCloseDialog}
                    title={dialogNode.title}
                    actions={dialogNode.actions}
                >
                  { dialogNode.node }
                </Dialog>
            )
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}


Layout.propTypes = {
  currentUser: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  userError: PropTypes.object,
  actions: PropTypes.object.isRequired,
  showDialog: PropTypes.bool.isRequired,
  dialogNode: PropTypes.oneOfType([ PropTypes.node, PropTypes.string ])
}

Layout.defaultProps = {
  currentUser: null,
  userError: null,
  dialogNode: null
}

const mapStateToProps = (state, ownProps = {}) => {
  // console.log(state); // state
  // console.log(ownProps); // undefined
  return {
    currentUser: state.user.currentUser,
    isFetching: state.user.isFetching,
    userError: state.user.error,
    showDialog: state.system.dialogNode !== null,
    dialogNode: state.system.dialogNode

  }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ ...userActionCreators, ...systemActionCreators }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
