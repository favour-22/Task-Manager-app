const express = require('express');
const router = express.Router();
const User = require('../models/user-models');
const { compareHash } = require('../utils/pass-utils');

router.get('/', (req, res) => {
  res.render('login');
});
//COMMENTED OUT TO MAKE SURE THE SUCCFUL PAEGE WORKD OUT 
router.post('/', async (req, res) => {
  try {
    const name = req.body.name;
    const password = req.body.password;

    const user = await User.findOne({ name });

    if (!user) {
      res.send('Invalid credentials');
      return;
    }

    const isPasswordValid = await compareHash(password, user.password);

    if (isPasswordValid) {
      //Password is correct
      // Implement your logic for successful login here
      res.send('Logged in successfully');
    } else {
      // Password is incorrect
      res.send('Invalid credentials');
    }
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;