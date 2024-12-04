const express = require('express');

const router = express.Router()
const mongoose = require('mongoose');
const Category = require('../models/Category')

// add category 
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

// get all category
router. get('/all-category',(req,res)=>{
    Category.find()
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

router. get('/all-category/:id',(req,res)=>{
    Category.find({id:req.params.id})
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