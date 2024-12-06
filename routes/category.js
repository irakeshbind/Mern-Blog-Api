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





// delete category by id 
router.delete('/delete-category/:id',(req,res)=>{
    // console.log(req.params.id)
     //isame received kia jaye
    Category.findByIdAndDelete(req.params.id)
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



// update category by id 
router.put('/update-category/:id',(req,res)=>{
    // console.log(req.params.id)
     //isame received kia jaye
    Category.findByIdAndUpdate(req.params.id,{
    
        fullName:req.body.fullName
    },{new:true})
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