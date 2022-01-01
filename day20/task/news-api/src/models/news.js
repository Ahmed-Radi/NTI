const mongoose = require('mongoose');

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

newsSchema.methods.toJSON = function(){
    // document
    const news = this

    // Converts this document into a object
    const newsObject = news.toObject()
    return newsObject;
}

const News = mongoose.model('News', newsSchema)

module.exports = News