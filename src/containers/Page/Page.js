import React, { PropTypes } from 'react'
import _ from 'lodash'
import ReactMarkdown from 'react-markdown'
import PageObject from 'libs/PageObject'
import config from 'constants'

import './Page.scss';

const Page = (props) => {
  const { pages } = config;
  let currentPage = pages[props.match.params.id]
  console.log(props.match.params.id, currentPage)
  if (_.isEmpty(currentPage)) {
    currentPage = props.defaultData;
  }
  return (
    <div className="page">
      <div className="lp-floating-action-button"></div>
      {currentPage.showTitle &&  <h1>{_.startCase(currentPage.title)}</h1>}
      <ReactMarkdown source={currentPage.body} />
    </div>

  )
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