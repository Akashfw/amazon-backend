const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate=(req,res,next)=>{
    const token = req.headers.authorization;
     if(token){
        const decoded_token= jwt.verify(token,process.env.key);
        if(decoded_token){
            next()
        }else{
            res.send("please login frist")
        }
     }else{
        res.send("Please login")
     }
}

module.exports={
    authenticate
}