import React, { PropTypes } from 'react'

import './Page.scss';

const Page = (props) => {
  console.log(props)
  return (
    <div className="page">
      <h1>{props.match.params.id || props.title}</h1>
      <p>
        page content
      </p>
    </div>

  )
}

Page.propTypes = {
  title: PropTypes.string
}

Page.defaultProps = {
  title: 'No Title'
}

export default Page