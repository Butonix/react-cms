const users = {
  all:
    [{
      id: 1,
      name: "John",
      email: "demo@sample.com",
      password: "demo"
    }, {
      id: 2,
      name: "Sarah",
      email: "sarah@mail.com",
      password: "sarah123"
    }],
  getById: function(id) {
    return this.all.filter(function (u) {
      return u.id === id

    })[0]
  },
  getBy(field, value) {
    return this.all.filter(function (u) {
      return u[field] === value
    })[0]
  }
}
module.exports = users