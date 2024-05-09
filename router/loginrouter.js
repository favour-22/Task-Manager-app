const express = require('express');
const app = express()
const router = express.Router();
const User = require('../models/user-models');
//const { compareHash } = require('../utils/pass-utils');
require('dotenv').config();
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');


router.use(cookieParser())

//app.use(flash());


router.get('', (req, res) => {
  res.render('login')
});

router.post('', async (req, res) => {
  try {
    const token = req.cookies.authToken;
    console.log(token)
    if (!token) {
      console.log('Invalid credentials');
      return;
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decoded.userId);
    if (!user) {
      //res.send('Invalid credentials');
      //req.flash('error', 'Invalid credentials')
      res.redirect('/auth/login')
      return;
    }
    //res.send('Logged in successfully');
    //req.flash('success', 'Logged in successfully ')
    res.redirect('/auth/task/show')
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
