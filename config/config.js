const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.port || 8000
const bodyparser = require('body-parser')


const homeRouter = require('../router/homerouter')
const router = require('../router/router')
const registerRouter = require('../router/registerRouter');
const loginRouter = require('../router/loginrouter');
const connectDb = require('../config/db')
const errHandler = require('../middlewares/errHandler')



//const cors = require('cors')
connectDb()
//app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'));
//app.use(errHandler())


app.use('/api/home', homeRouter)
app.use('/api/', router)
app.use('/auth/login', loginRouter)
app.use('/auth/register', registerRouter,)





module.exports = { app, port }

