const express = require('express')
const router = express.Router()
const app = express()

app.use(express.json())


router.get('', (req, res) => {
    res.render('successful')
});


router.post('', (req, res) => {
    const name = req.body.name
    console.log(name);
    res.send(name)
});

module.exports = router;