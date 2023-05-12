const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const 
const initialize = () => {
    passport.use(new LocalStrategy({username:'email'}),authenticateUser)
}