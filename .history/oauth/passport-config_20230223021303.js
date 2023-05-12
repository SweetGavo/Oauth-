const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy

const initialize = () => {
    const authenticateUser = (email,password,done) => {};
    const user = getUserByEmail();
    if(user == nul)
    passport.use(new LocalStrategy({ usernameField: 'email' }), authenticateUser)
    passport.serializeUser((user, done) => {})
    passport.deserializeUser((user,done) => {})
}