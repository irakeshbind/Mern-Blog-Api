const mongoose = require('mongoose')
const bloSchema = new mongoose.Schema({
               _id:mongoose.Schema.Types.ObjectId,
              title:{type:String,required:true},
              description:{type:String,required:true},
              auther:{type:String,required:true},
            //   photo:String
              
},{timestamps:true})
module.exports = mongoose.model('blo',bloSchema)