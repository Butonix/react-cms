import React, { PropTypes, PureComponent } from 'react'
// import classNames from 'classnames'

class PageEditor extends PureComponent {
  // constructor(props) {
  //  super(props)
  // }

  handleOnChange = (evt) => {
    evt.preventDefault();
    const { onChange } = this.props
    const newBody = evt.currentTarget.value
    if (onChange) {
      onChange(newBody)
    }
  }

  render() {
    // console.log(this.props)
    const { pageContent } = this.props
    return (
        <div className="page-editor">
          <form>
            <textarea defaultValue={pageContent.body} onChange={this.handleOnChange} />
          </form>
        </div>
    )
  }
}

PageEditor.propTypes = {
  pageContent: PropTypes.object.isRequire,
  onChange: PropTypes.onChange
}

PageEditor.defaultProps = {
  onChange: (evt) => { console.log('changed', evt) }
}


export default PageEditor