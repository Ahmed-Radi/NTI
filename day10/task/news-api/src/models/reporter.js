const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const reporterSchema = mongoose.Schema ({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        trim: true,
        validate (value) {
            if (value < 0) {
                throw new Error ('Age must be positive number')
            }
        }
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        validate (value) {
            if (!validator.isEmail(value)) {
                throw new Error(`Invalid email`)
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 6,
    },
    phone: {
        type: String,
        trim: true,
        required: true,
        validate (value) {
            if (!validator.isMobilePhone(value.replace('0', ''), 'ar-EG') || value.length > 11) { // 0 1019278438
                throw new Error(`Invalid phone number `)
            }
        }
    },
    tokens: [{
            type: String,
            required: true,
        }
    ],
    avatar: {
        type:Buffer,
    }
},
{timestamp: true}
)

// Relation

reporterSchema.virtual('news', {
    ref: 'News',
    localField: '_id',
    foreignField: 'reporter'
})

reporterSchema.pre('save', async function (next) {
    const reporter = this
    if (reporter.isModified('password')) { // If I let password in req.body and not modify it but still in req.body it will hash again
        reporter.password = await bcrypt.hash(reporter.password, 8)
    }
    next();
})

//check email & password for login

reporterSchema.statics.findByCredential = async (email, password) => {
    const reporter = await Reporter.findOne({email})
    if (!reporter) {
        throw new Error("Incorrect Email or password provided.")
    }

    const matchPassword = await bcrypt.compare(password, reporter.password)
    if (!matchPassword) {
        throw new Error("Incorrect Email or password provided.")
    }

    return reporter
}

// generate Token

reporterSchema.methods.generateToken = async function () {
    const reporter = this
    const token = jwt.sign({_id:reporter._id.toString()}, 'newsApi')
    reporter.tokens = reporter.tokens.concat(token)
    await reporter.save()
    return token
}

// Remove token and password

reporterSchema.methods.toJSON = function () {
    const reporter = this
    const reporterObject = reporter.toObject()

    delete reporterObject.password
    delete reporterObject.tokens

    return reporterObject
}

const Reporter = mongoose.model('Reporter', reporterSchema)

module.exports = Reporter