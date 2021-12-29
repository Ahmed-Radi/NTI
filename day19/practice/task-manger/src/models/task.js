const mongoose = require('mongoose')

const taskSchema = {
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
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}
const Task =  mongoose.model('Task', taskSchema)

module.exports = Task