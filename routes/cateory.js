const express = require('express')
const router = express.Router()

router.post('/ct',(req,res)=>{
    res.status(200).json({
        maf:'nnnnn'
    })
})


module.exports = router;