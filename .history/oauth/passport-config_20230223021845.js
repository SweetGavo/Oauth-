const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require("passport-local").Strategy;

const initialize = () => {
  const authenticateUser = (email, password, done) => {};
  const user = getUserByEmail();
  if (user == null)
    return done(null, false, { message: "No user with that email" });
  try {
    if (bcrypt.compare(password, user.password)) return done(null, user);
    else return done(null, false, { message: "Password Incorrect" });
  } catch (error) {
      
  }
  passport.use(new LocalStrategy({ usernameField: "email" }), authenticateUser);
  passport.serializeUser((user, done) => {});
  passport.deserializeUser((user, done) => {});
};
