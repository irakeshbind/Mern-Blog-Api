const express = require('express')
const app = express();

const userCateory = require('./routes/cateory');
const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://nm:12@test-pro-db.0tlsn.mongodb.net')
.then(()=>{
        console.log("Connected with database");
         })
  .catch(err=>{
            console.log("Database is not connect");
         })

app.use('/cat',userCateory)



module.exports = app;
