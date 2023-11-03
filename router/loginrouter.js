//admin //admin
const express = require('express');
const { app } = require('../config/config')

const router = express.Router();
const compareHash = require('../utils/pass-utils');
const User = require('../models/user-models');
//const flash = require('express-flash')



//app.use(flash());


router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ name: req.body.name }).select('password');
        const isPasswordValid = await compareHash(req.body.password, user.password);
        if (isPasswordValid) {
            // Password is correct
            //res.json({ message: "connected to db showing task page " })
            res.render('task');
        } else {
            // Password is incorrect //shoudl be flashed 
            res.json({ message: 'Invalid password' });

        }
    } catch (error) {
        // Handle the error
        res.send(error);
        res.status(500)
    }

});


module.exports = router;