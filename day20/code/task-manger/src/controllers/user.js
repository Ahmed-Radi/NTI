const User = require('../models/user')

const userSignUp = async(req,res)=>{
    try{
        /**
         *   "name":"amr",
            "age":40,
             "email":"amr@gmail.com",
            "password":"123456"
         */
        const user = new User(req.body)
        const token = await user.generateToken()
        await user.save()
        res.status(200).send({user,token})
    }
    catch(e){
        res.status(400).send(e)
    }
}



const userLogin = async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateToken()
        res.status(200).send({user,token})
    }
    catch(error){
        res.status(500).send(error)
    }
}


const getAllUsers = (req,res)=>{
    User.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch((e)=>{
        res.status(500).send(e)
    })
}

const profile = (req,res)=>{
    // console.log(req.user)
    res.send(req.user)
}
module.exports = {
    userSignUp,
    userLogin,
    getAllUsers,
    profile
}