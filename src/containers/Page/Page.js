import React, { PropTypes } from 'react'

const Page = (props) => {
  console.log(props)
  return (
    <h1>{props.match.params.id || props.title}</h1>
  )
}

Page.propTypes = {
  title: PropTypes.string
}

Page.defaultProps = {
  title: 'No Title'
}

export default Page