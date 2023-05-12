const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy

const initialize = () => {
    passport.use(new LocalStrategy())
}