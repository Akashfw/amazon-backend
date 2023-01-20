const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    name:String,
    email:String,
    pass:String,
    age:Number
});

const Usermodel= mongoose.model("user",userSchema);


module.exports={
    Usermodel
}