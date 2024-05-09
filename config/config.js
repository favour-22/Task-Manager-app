const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.port || 8000
const bodyparser = require('body-parser')
require('dotenv').config();


const homeRouter = require('../router/homerouter')
const router = require('../router/router')
const registerRouter = require('../router/registerRouter');
const loginRouter = require('../router/loginrouter');
const connectDb = require('../config/db')
//const errHandler = require('../middlewares/errHandler')
const successful = require('../router/successfulRouter')
const savetask = require('../router/save-taskRouter')



//Starting the databseS
uri = process.env.MONGODB_URI
connectDb(uri);
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'));

//app.use(errHandler())


app.use('/', homeRouter)
app.use('/api/', router)
app.use('/auth/login', loginRouter)
app.use('/auth/register', registerRouter,)
app.use('/auth/v1/home', successful)
app.use('/auth/task/show', savetask)





module.exports = { app, port }

