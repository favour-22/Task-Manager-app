const express = require('express');
const { authenticateUser } = require('../utils/auth_credentials');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  try {
    const name = req.body.name;
    console.log(name)
    const user = await authenticateUser(name);
    
    if (!user) {
      return res.status(400).json({ message: 'Username is not correct' });
    }
    
    // Continue with your login logic here
    // ...
    // If login is successful, redirect or send a success response
    // ...
    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).json({ message: 'An error occurred from the username' });
  }
});

module.exports = router;




  // try {
    //     const user = await User.findOne({ name: req.body.name }).select('password');
    //     const isPasswordValid = await compareHash(req.body.password, user.password);
    //     //check the email in the database and the onde the user entered

    //     if (isPasswordValid) {
    //         // Password is correct
    //         //res.json({ message: "connected to db showing task page " })
    //         res.render('task');
    //     } else {
    //         // Password is incorrect //shoudl be flashed flash the error message that message is in correc
    //         //have a condition to check if the email and password is corrct and throw individual error for them 
    //         res.json({ message: 'Invalid password' });

    //     }
    // } catch (error) {
    //     // Handle the error
    //     res.send(error);
    //     res.status(500)
    // }