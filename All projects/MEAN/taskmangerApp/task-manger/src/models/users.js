const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Please Enter valid email')
            }
        }
    },
    age: {
        type: Number,
        default: 20,
        validate(value) {
            if (value < 0) {
                throw new Error ('Age must be positive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
    },
    tokens: [{
        type: String,
        required: true,
        ref: 'User'
    }],
    avatar: {
        type: Buffer,
    }
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.statics.findByCredential = async (email, password) => {
    const user = await User.findOne({email})

    if (!user) {
        throw new Error ('Cant login Error in email or password')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error ('Cant login Error in email or password')
    }

    return user
}

userSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password'))
        user.password = await bcrypt.hash(user.password, 8)
    next()
})

userSchema.methods.generateToken = async function () {
    const user = this
    const token = jwt.sign({_id:user._id.toString()}, process.env.JWT_SECRET)

    user.tokens = user.tokens.concat(token)
    await user.save()

    return token
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

const User = mongoose.model('User', userSchema)

module.exports = User