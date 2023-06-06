const mongoose=require("mongoose");
const users_schema=new mongoose.Schema({
 email:{
    type:String,
    required:true,
    unique:true
 },
 username:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 }


})
const sign_up=new mongoose.model("Signup",users_schema);
module.exports=sign_up;