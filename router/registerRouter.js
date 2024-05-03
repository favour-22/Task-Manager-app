const express = require('express')
const router = express.Router()
const User = require('../models/user-models')
const hashPassword = require('../utils/pass-utils')


router.get('/', (req, res) => {
    res.render('register');
});


router.post('/', async (req, res) => {
    let Password = req.body.password
    const hash = await hashPassword(Password)
    const newUser = User({
        name: req.body.name,
        email: req.body.email,
        password: hash
    })
    new User.save()
        .then(() => {
            console.log('User saved successfully');
        })
        .catch((error) => {
            res.status(500).send('An error occurred while saving the user please try again.');

        });
    res.redirect('/auth/login')
});


module.exports = router;