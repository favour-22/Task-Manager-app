const express = require('express');
const router = express.Router();
const User = require('../models/user-models');
const hashPassword = require('../utils/pass-utils');
const jwt = require('jsonwebtoken')
require('dotenv').config();

router.get('', (req, res) => {
    res.render('register');
});

router.post('', async (req, res) => {
    const password = req.body.Password;
    const hash = await hashPassword(password);

    const user = new User({
        name: req.body.Username,
        email: req.body.Email,
        password: hash
    });

    await user.save().then(() => {
        console.log('User saved')
        const token = jwt.sign({ userId: user._id },
            process.env.SECRET_KEY, { expiresIn: '1h' });
        res.cookie('authToken', token,
            {
                httpOnly: true,
                secure: true,
                expiresIn: '1h'
            });
        res.redirect('/auth/login')
    }).catch((err) => {
        console.error(err)
    });


});


module.exports = router;