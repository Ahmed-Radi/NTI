// const auth = async (req,res,next) =>{
//     console.log('Auth middelware')
//     next()
// }

const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next)=>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        // console.log(token)  // 123

        const decode = jwt.verify(token,process.env.JWT_SECRET) // {}
        // console.log(decode)
// {_id:'61b9e308d694b0d461ac8a80',tokens:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5ZTMwOGQ2OTRiMGQ0NjFhYzhhODAiLCJpYXQiOjE2Mzk1NzIzMDl9.f0B_-2ZRtKq0QGZ5bjpNyK8a210XxvINmdgxDvtNDGg}
        const user = await User.findOne({_id:decode._id,tokens:token})

        if(!user){
            throw new Error()
        }

        // req.user 
        req.user = user

        req.token = token  // 123

        next()
    }
    catch(e){
        res.status(401).send({
            error:'Please Authenticate'
        })
    }
}

module.exports = auth