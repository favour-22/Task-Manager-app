const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: " default page" });
});

module.exports = router;