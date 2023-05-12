const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy

const initialize = () => {
    const authenticateUser = (email,password,done) => {};

    passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
    passport.serializeUser({})
}