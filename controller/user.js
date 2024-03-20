const User=require('../models/user');
const jwt=require('jsonwebtoken')

//  this module is used for registered the users 
module.exports.registerUser= async function (req,res)
{
    try {
        const user= await User.findOne({email:req.body.email})
        if (user)
        {
            return res.status(400).json({
                message:"User already exists",
                sucess:false
            })
        }
        await User.create(req.body)
        return res.status(200).json({
            messsage:"sucesfully created user",
            sucess:true
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,


        })
        
    }

    
}
//  it is used for singining  the users 
module.exports.crestateSession= async function(req,res)
{
    try {
        const user= await User.findOne({email:req.body.email})

        if(!user || user.password!=req.body.password)
        {
            return res.status(422).json({
                message:"Invalid user email or password"
            })
        }
        const token=jwt.sign(user.toJSON(), "ecommerce",{ expiresIn: "1d" })
        return res.status(200).json({
            token,
            message:"Sign in sucessfully please take your token"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            sucess:false,
            message:"unbale to sigin"

        })
        
    }
  
}