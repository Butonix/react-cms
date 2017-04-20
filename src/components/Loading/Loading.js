import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './Loading.scss'

const Loading = (props) => {
  const classes = classNames({
    'bar-loader': true,
    'outline': props.outline
  })
  return (
      <div className="loader-wrapper">
        <div className={classes} />
        <div className={classes} />
        <div className={classes} />
      </div>
  )
}

Loading.propTypes = {
  outline: PropTypes.bool
}

Loading.defaultProps = {
  outline: false
}

export default Loading
