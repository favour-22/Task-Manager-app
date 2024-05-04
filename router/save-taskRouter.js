const express = require('express')
const router = express.Router()
const app = express()
let Task = []
app.use(express.json())


router.get('', (req, res) => {
    res.render('successful')
});

router.post('', (req, res) => {
    const task = req.body.taskDescription
    const title = req.body.title
    const Time = req.body.taskStartTime;
    Task.push(task)
    Task.push(title)
    res.send(Task)

});

module.exports = router;