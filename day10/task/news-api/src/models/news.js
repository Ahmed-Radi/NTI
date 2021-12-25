const mongoose = require('mongoose');
// const validator = require('validator')

const time = {
    timestamps: {currentTime: () => new Date().setHours(new Date().getHours() + 2)}
}

const newsSchema = mongoose.Schema ({
    title: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    // created_at: {
    //     type: Date,
    //     default: Date.now
    // },
    // date: {
    //     type: String,
    //     trim: true,
    //     required: true
    // },
    image: {
        type: Buffer
    },
    reporter: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Reporter',
    },
},
time
)

const News = mongoose.model('News', newsSchema)

module.exports = News