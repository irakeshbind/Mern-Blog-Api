const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')
const mongoose = require('mongoose')
// const cloudinary = require('cloudinary').v2;


//    // Configuration
//    cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET 
// });


router.post('/blocks',(req,res)=>{
   const newBlog = new Blog({
    _id:new mongoose.Types.ObjectId,
    title:req.body.title,
    description:req.body.description,
    auther:req.body.auther
   })
   newBlog.save()
   .then(result=>{
    res.status(200).json({
        newBlog:result
    })
   })
   .catch(err=>{
    console.log(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
   })
})

//
router.get('/blocks',(req,res)=>{
  Blog.find()
    .then(result=>{
     res.status(200).json({
         newBlog:result
     })
    })
    .catch(err=>{
     console.log(err=>{
         console.log(err)
         res.status(500).json({
             error:err
         })
     })
    })
 })

///
 router.get('/blocks/:id',(req,res)=>{
    Blog.findById(req.params.id)
      .then(result=>{
       res.status(200).json({
           newBlog:result
       })
      })
      .catch(err=>{
       console.log(err=>{
           console.log(err)
           res.status(500).json({
               error:err
           })
       })
      })
   })

   //
   router.delete('/blocks/:id',(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
      .then(result=>{
       res.status(200).json({
           newBlog:result
       })
      })
      .catch(err=>{
       console.log(err=>{
           console.log(err)
           res.status(500).json({
               error:err
           })
       })
      })
   })
//
router.put('/blocks/:id',(req,res)=>{
    // console.log(req.params.id)
     //isame received kia jaye
 
     Blog.findByIdAndUpdate(req.params.id,{
            title:req.body.title,
            description:req.body.description,
            auther:req.body.auther
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