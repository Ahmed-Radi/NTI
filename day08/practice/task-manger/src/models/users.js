const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

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
    }
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

const User = mongoose.model('User', userSchema)

module.exports = User