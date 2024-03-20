const mongoose=require('mongoose');

// creating the users schema
const UserSchema=new mongoose.Schema({
  name:
  {
    type:String,
    required:true
  },
  email:
  {
    type:String,
    required:true
  } ,
  password:
  {
    type:String,
    required:true
  }
})

// creating  a new model called "User"
const User=mongoose.model('User',UserSchema)
module.exports=User