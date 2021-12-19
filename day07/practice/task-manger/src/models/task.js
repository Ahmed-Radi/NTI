const mongoose = require('mongoose')

const Task =  mongoose.model('Task',{
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = Task