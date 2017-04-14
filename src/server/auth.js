const passport = require('passport')
const passportJWT = require('passport-jwt')
const users = require('./data/users.js')
const cfg = require('./config.js')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
}

module.exports = function() {
  const strategy = new Strategy(params, function(payload, done) {
    const user = users.getById(payload.id) || null
    // console.log(users.all, user, payload.id)

    if (user) {
      // console.log(user)
      return done(null, {
        id: user.id
      })
    } else {
      return done(new Error("User not found"), null)
    }
  })
  passport.use(strategy)
  return {
    initialize: function() {
      // console.log('initialize')
      return passport.initialize()
    },
    authenticate: function() {
      // console.log('authenticate', cfg.jwtSession)
      return passport.authenticate("jwt", cfg.jwtSession)
    }
  }
}