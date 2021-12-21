const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')


const userScehma = mongoose.Schema({
    name:{ 
        type:String,
        required:true,
        trim:true

    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true, //'FARAH@GMAIL.COM --> 'farah@gmail.com'
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    age:{
        type:Number,
        default:20,
        validate(value){
            if(value<0){
                throw new Error('Age must be positive number')
            }
        }

    },
    password:{ //'28934728348237jhgghghgh'
        type:String,  
        required:true,
        trim:true,
        minlength:6
    },
    tokens:[
        {
            type:String,
            required:true
        }
    ],
    avatar:{
        type:Buffer
    }
})

// virtual relation

userScehma.virtual('tasks',{
    ref:'Task',   // model build realstionship 
    localField:'_id',   // 
    foreignField:'owner'
})


userScehma.statics.findByCredentials = async(email,password) =>{

    const user = await User.findOne({email})
    // console.log(user)
    if(!user){
        throw new Error('Unable to login.. Please check email or password')
    }

    // 1234567 --> 123456 (dshgfdsfgsdhf347534756wehgehsd)
    const isMatch = await bcrypt.compare(password,user.password)
    // console.log(isMatch)
    if(!isMatch){
        throw new Error('Unable to login.. Please check email or password')
    }

    return user

}

userScehma.pre('save',async function(next){
    const user = this
    // console.log(user)
    //123456 = fgyt565656rft454545545
    if(user.isModified('password'))
    user.password = await bcrypt.hash(user.password,8)
    next()
})

userScehma.methods.generateToken = async function(){
    const user = this
    // console.log(user)  //099878iuguyy7868767tft78
    const token = jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    // [] = 
    user.tokens = user.tokens.concat(token)
    await user.save()

    return token
}

userScehma.methods.toJSON = function(){
    // document
    const user = this

    // Converts this document into a object
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject

}


const User = mongoose.model('User',userScehma)

module.exports = User