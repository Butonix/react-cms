// index.js
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
// const unless = require('express-unless')
const bodyParser = require('body-parser')
const jwt = require("jwt-simple")
const auth = require('./auth.js')()
const users = require("./data/users.js")
const pages = require("./data/pages.js")
const cfg = require("./config.js")
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));
app.use(morgan('combined'))
app.use(auth.initialize())
app.use(cors({ origin: true, credentials: true }))
app.options(cors({ origin: true, credentials: true }))


// const authRequest = function() {
//   return auth.authenticate()
// }
//
// authRequest.unless = unless;

// app.use(authRequest.unless({
//   path: [
//     '/api',
//     '/api/token'
//   ]
// }))

// print headers
// app.use(function(req, res, next) {
//   console.log(req.headers)
//   next()
// })

app.get('/api', function(req, res) {
  res.json({
    status: 'My API is alive!'
  })
})

// logged user id
app.get("/api/user", auth.authenticate(), function(req, res) {
  console.log(users.getById(req.user.id))
  res.json(users.getById(req.user.id))
})

app.post("/api/page/:slug", auth.authenticate(), function(req, res) {
  const page = pages.getBySlug(req.params.slug)
  const newPage = req.body
  if (page) {
    delete newPage.slug
    delete newPage.id
  }
  const mergedPage = Object.assign(page, newPage)
  console.log('edit', page, mergedPage)
  pages.save(mergedPage)
  res.json(pages.all)
})

app.get("/api/page/:slug", auth.authenticate(), function(req, res) {
  const page = pages.getBySlug(req.params.slug)
  console.log('read', page)
  if (page) {
    res.json(page)
  } else {
    res.sendStatus(404)
  }

})

app.get("/api/pages", function(req, res) {
  console.log(pages.all)
  res.json(pages.all)
})

// generating token
app.post("/api/token", function(req, res) {
  // console.log(req.body)
  if (req.body.email && req.body.password) {
    const email = req.body.email
    const password = req.body.password
    const user = users.getBy('email', email)
    const validate = user && (user.password === password)

    if (validate) {
      const payload = {
        id: user.id
      }
      const token = jwt.encode(payload, cfg.jwtSecret)
      res.json({
        token: token
      })
    } else {
      res.sendStatus(401)
    }
  } else {
    res.sendStatus(401)
  }
})

app.listen(4000, function() {
  console.log('My API is running... http://localhost:4000/api')
})

module.exports = app