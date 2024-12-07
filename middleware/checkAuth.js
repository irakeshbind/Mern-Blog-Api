const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    try
    {
      const token = req.headers.authorization.split(" ")[1]
      console.log(token);
      const verify = jwt.verify(token,'sbs on line classes')
      if(verify)
      {
        next();
      }
      else
      {
        return res.status(401).json({
            ms:'not valid a user'
        })
      }
    }
    catch(err)
    {
      return res.status(402).json({
        ms:'invalid token'
      })
    }
}