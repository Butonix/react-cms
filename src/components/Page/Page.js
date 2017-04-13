import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import ReactMarkdown from 'react-markdown'
import { FloatingButton } from 'components/Buttons'
import PageObject from 'libs/PageObject'
import config from 'constants'
import PageEditor from './PageEditor'

import './Page.scss'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      editingPage: null
    }
  }

  loadPage = () => {
    const { pages } = config
    let currentPage = pages[this.props.match.params.id]
    // console.log(this.props.match.params.id, currentPage)
    if (_.isEmpty(currentPage)) {
      currentPage = this.props.defaultData
    }
    return Object.assign({}, currentPage)
  }

  savePage = () => {
    const currentPage = this.loadPage()
    config.pages = { ...config.pages, [currentPage.slug]: Object.assign({}, this.state.editingPage) }
    console.log(config.pages)
    this.handleBodyCancel()
  }

  handleEditClick = () => {
    const { editing, editingPage } = this.state
    if (!editing) {
      const currentPage = editing ? editingPage : this.loadPage()

      this.setState({
        editing: true,
        editingPage: currentPage
      })
    } else {
      this.savePage()
    }
  }

  handleBodyChange = (newBody) => {
    this.setState({ editingPage: { ...this.state.editingPage, body: newBody } })
  }

  handleBodyCancel = (evt) => {
    // console.log(evt)
    this.setState({
      editing: false,
      editingPage: null
    })
  }

  render() {

    const { editing, editingPage } = this.state
    const currentPage = editing ? editingPage : this.loadPage()
    return (
        <div className="page">
          {currentPage.showTitle && <h1>{_.startCase(currentPage.title)}</h1>}
          <ReactMarkdown className="page-body" source={currentPage.body}/>
          <FloatingButton
              editing={editing}
              onClick={this.handleEditClick}
              onCancel={this.handleBodyCancel}
          />
          {
            editing && <PageEditor
              pageContent={currentPage}
              onChange={this.handleBodyChange}
            />
          }
        </div>

    )
  }
}

Page.propTypes = {
  title: PropTypes.string,
  defaultData: PropTypes.objectOf(PageObject)
}

Page.defaultProps = {
  title: 'No Title',
  defaultData: new PageObject({ title: 'No title', slug: 'no-slug', body: 'No content' })
}

export default Page