import _ from 'lodash'

class PageObject {
  constructor(props) {
    const { title, slug, body, showTitle } = props
    this.title = title
    this.slug = slug || _.kebabCase(this.title)
    this.body = body
    this.showTitle = showTitle === false
  }
}

export default PageObject;