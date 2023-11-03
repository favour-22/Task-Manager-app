const express = require('express')
const app =express()
const router = express.Router()
//const bodyparser = require('body-parser');
//const cors = require('cors')

//app.use(cors());
//app.use(express.urlencoded({ extended: true }));

//app.use(bodyparser.json())




router.get('/',(req,res)=>{
  res.render('index'); 
});


module.exports = router;