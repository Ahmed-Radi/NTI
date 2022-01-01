const multer = require('multer')
const express = require('express')
,router = express.Router()
,News = require('../models/news')
,auth = require('../middleware/auth')

// Add News

router.post('/news', auth, async (req, res) => {
    try {
        const news = News({...req.body, reporter:req.reporter._id})
        await news.save()
        res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get all news

router.get('/news', auth,async (req, res) => {
    try {
        // const news = await News.find({})
        await req.reporter.populate('news')
        res.status(200).send(req.reporter.news)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get by Id

router.get('/news/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id
        const news = await News.findOne({_id, reporter: req.reporter._id})
        if (!news) {
            return res.status(404).send() // 'Task Not Found'
        }
        res.status(200).send(news)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Edit News using Id

router.patch('/news/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowToUpdate = ['title', 'description']
    const valid = updates.every(update => allowToUpdate.includes(update))

    if (!valid) {
        return res.status(400).send() //"Can't Update"
    }

    try {
        const _id = req.params.id
        // const news = await News.findById(_id)
        const news = await News.findOne({_id, reporter: req.reporter._id})
        if (!news) {
            return res.status(404).send() // "News Not found 404 !!"
        }
        updates.forEach(el => news[el] = req.body[el])
        // await news.save() // it work without save()
        await news.save()
        res.status(200).send(news)
    } catch (err) {
        res.status(500).send(err)
    }
})

// Delete news

router.delete('/news/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id
        const news = await News.findOneAndDelete({_id, reporter: req.reporter._id})
        if (!news) {
            return res.status(404).send() // 'News Not found to Delete!!'
        }
        res.status(200).send(news)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Add Image

const uploads = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|png|jfif|jpeg)$/)) {
            cb(new Error('Please Upload Image'))
        }
        cb(null,true)
    }
})

router.post('/image/:id', auth, uploads.single('image'), async (req, res) => {
    try{
        const _id = req.params.id
        const news = await News.findById(_id)
        if(!news){
            return res.status(404).send()
        }

        news.image = req.file.buffer
        await news.save()
        res.status(200).send(news)
    }
    catch(e) {
        res.status(400).send(e)
    }
})



module.exports = router

/** For Example to Enter

    "title": "ahmed",
    "description": "Ahmed Radi",
    "date": "" ,
    "image" : "",

 */