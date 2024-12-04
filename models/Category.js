const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
               _id:mongoose.Schema.Types.ObjectId,
               fullName:{type:String,required:true},
              
},{timestamps:true})
module.exports = mongoose.model('category',categorySchema)