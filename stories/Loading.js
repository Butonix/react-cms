import React, { PropTypes } from 'react'

import LoadingComponent from '../src/components/Loading'

const Loading = (props) => {
  const { componentProps, containerProps } = props
  return (
      <div style={{ width: containerProps.width, height: containerProps.height }}>
        <LoadingComponent { ...componentProps } />
      </div>
  )
}

Loading.propTypes = {
  componentProps: PropTypes.object,
  containerProps: PropTypes.object
}

Loading.defaultProps = {
  componentProps: {},
  containerProps: {
    width: '24px',
    height: '24px'
  }
}

export default Loading