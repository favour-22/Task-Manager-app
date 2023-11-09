const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv').config()




app.use(passport.initialize())
app.use(passport.session())
// Set up session
app.use(
    session({
        secret: process.env.sessionkey,
        resave: false,
        saveUninitialized: true,
    })
);
