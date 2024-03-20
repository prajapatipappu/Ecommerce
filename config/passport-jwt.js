// impoting the sets of  libraries from the passport jwt and also with the passport itself

const passport=require('passport');
const JWTStrategy=require('passport-jwt').Strategy
const ExtractJWT=require('passport-jwt').ExtractJwt

const User=require('../models/user')

//  creating options we also imported Users WHY ?,  beacause we try to find the users from the database when ever the request cames and the header contains jwt
let opts=
{
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ecommerce"
}

// find the user, if the user is find then return it and if the users is not find it will return false
// payload contains id of the users and more relevant info. 
passport.use(new JWTStrategy(opts, async function(jwt_payload, done) {
   const user= await User.findById(jwt_payload._id)
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    })
)
module.exports=passport