const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cateoryRoute = require('./routes/category');
const blogRoute = require('./routes/blog')
const userRoute = require('./routes/user')
const mongoose = require('mongoose');
// const fileupload = require('express-fileupload')

mongoose.connect('mongodb+srv://hotel:12@cluster0.kwtl9.mongodb.net/')
.then(()=>{
        console.log("Connected with database");
         })
  .catch(err=>{
            console.log("Database is not connect");
         })


// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/cat',cateoryRoute)
app.use('/blo',blogRoute)
app.use('/user',userRoute)

// app.use(fileupload({
//         useTempFiles:true
// }))
app.use('*',(req,res)=>{
        res.status(200).json({
                ma:'bad request'
        })
})


module.exports = app;

         