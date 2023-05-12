const passport = require('passport')
const bcrypt = require
const LocalStrategy = require('passport-local').Strategy

const initialize = () => {
    const authenticateUser = (email,password,done) => {};
    const user = getUserByEmail();
    if (user == null) return done(null, false, { message: 'No user with that email' }) 
    try {
        
    } catch (error) {
        
    }
    passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
    passport.serializeUser((user, done) => {})
    passport.deserializeUser((user,done) => {})
}