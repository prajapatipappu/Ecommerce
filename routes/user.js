const express=require('express')
const router=express.Router()

// initializing users controller
const usercontroller=require('../controller/user')
// To showing  the registered user
router.post('/signup',usercontroller.registerUser)
//  it shows the  login  user 
router.post('/sign',usercontroller.crestateSession)

module.exports=router