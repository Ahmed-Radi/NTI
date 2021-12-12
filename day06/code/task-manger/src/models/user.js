const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
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
    }
})

module.exports = User