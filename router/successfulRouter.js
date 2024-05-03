const express = require('express')
const app = express()
const router = express.Router()



router.post('', (req, res) => {
    res.render('successful');
});


module.exports = router;