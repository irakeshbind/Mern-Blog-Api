const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const userCateory = require('./routes/category');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hotel:12@cluster0.kwtl9.mongodb.net/')
.then(()=>{
        console.log("Connected with database");
         })
  .catch(err=>{
            console.log("Database is not connect");
         })


// app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/cat',userCateory)



module.exports = app;

         