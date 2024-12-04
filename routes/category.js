const express = require('express');

const router = express.Router()
const mongoose = require('mongoose');
const Category = require('../models/Category')

router.post('/category',(req,res)=>{
    const newCategory = new Category({
        _id:new mongoose.Types.ObjectId,
        fullName:req.body.fullName,
    })
    newCategory.save()
    .then(result=>{
        res.status(200).json({
            category:result
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })

})


module.exports = router;