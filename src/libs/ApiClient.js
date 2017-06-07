import 'whatwg-fetch'
import _ from 'lodash'


class ApiClient {
  constructor(props) {
    const { baseUrl } = props
    this.baseUrl = baseUrl
  }

  login(username, password) {
    /*
    const dataBody = new FormData()
    dataBody.append('email', username)
    dataBody.append('password', password)
    */

    const dataBody = JSON.stringify({
      email: username,
      password
    })


    console.log(dataBody)

    return fetch(`${this.baseUrl}/api/token`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json' //'application/x-www-form-urlencoded'
              },
              body: dataBody
            })
  }
}

export default ApiClient