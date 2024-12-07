const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const User = require('../models/User')
const bcrypt = require('bcrypt')

router.post('/sinup',(req,res)=>{
    console.log(req)
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err)
        {
            return res.status(500).json({
                error:err
            })
        }
        else
        {
            const user = new User({
                _id:new mongoose.Types.ObjectId,
                name:req.body.name,
                email:req.body.email,
                password:hash
            })
            user.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
        }
    })
   
})


module.exports = router;