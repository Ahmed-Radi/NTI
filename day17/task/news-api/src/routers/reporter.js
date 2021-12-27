const express = require('express')
const router = express.Router();
const multer = require('multer')
const Reporter = require('../models/reporter')
const auth = require('../middleware/auth')

// Sign up

router.post('/reporter', async (req, res) => {
    try {
        const reporter = new Reporter(req.body)
        const token = await reporter.generateToken()
        res.status(200).send({reporter,token})
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get All Reporters

router.get('/reporter', auth, async (req, res) => {
    try {
        const reporter = await Reporter.find({})
        res.status(200).send(reporter)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get reporter using ID

router.get('/reporter/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id
        const reporter = await Reporter.findById(_id)
        if (!reporter) {
            res.status(404).send('Reporter Not found 404 !!')
        }
        res.status(200).send(reporter)
    } catch (error) {
        res.status(500).send(error)
    }
})

// update by ID

router.patch('/reporter/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedToUpdate = ['name', 'age', 'password', 'email', 'phone']
    const valid = updates.every(el => allowedToUpdate.includes(el))
    if (!valid) {
        return res.status(400).send('Not Allow to Edit')
    }

    try {
        const _id = req.params.id
        const reporter = await Reporter.findByIdAndUpdate(_id)
        if (!reporter) {
            return res.status(404).send('Reporter Not found to Update !!')
        }
        updates.forEach(el => (reporter[el] = req.body[el]))
        await reporter.save()
        res.status(200).send(reporter)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Delete using ID

router.delete('/reporter/:id', auth, async (req, res) => {
    try {
        const reporter = await Reporter.findByIdAndDelete(req.params.id)
        if (!reporter) {
            res.status(500).send("Reporter Not found to Delete !!")
        }
        res.status(200).send(reporter)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Login

router.post('/login', async (req, res) => {
    try {
        const reporter = await Reporter.findByCredential(req.body.email, req.body.password)
        const token = await reporter.generateToken()
        res.status(200).send({reporter,token})
    } catch (error) {
        res.status(500).send(error)
    }
})

// Logout

router.delete('/logout', auth, async (req, res) => {
    try {
        req.reporter.tokens = req.reporter.tokens.filter(token => {
            return token !== req.token
        })
        await req.reporter.save()
        res.status(200).send('logout !!')
    } catch (error) {
        res.status(500).send(error)
    }
})

// Logout all

router.delete('/logoutall', auth, async (req, res) => {
    try {
        req.reporter.tokens = []
        await req.reporter.save()
        res.status(200).send('logout all')
    } catch (error) {
        res.status(500).send(error)
    }
})

// profile

router.get('/profile', auth, (req, res) => {
    res.send(req.reporter)
})

// Add Avatar

const uploads = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|jfif)$/)) {
            cb(new Error('Please Upload Image'))
        }
        cb(null, true)
    }
})


router.post('/profile/avatar', auth, uploads.single('avatar'), async (req, res) => {
    try {
        req.reporter.avatar = req.file.buffer
        await req.reporter.save()
        res.status(200).send('image uploaded')
    } catch (e) {
        console.log('ssssssssssssssssssssssssssss')
        res.status(500).send(e)
    }

})

module.exports = router

/** For Example to Enter
{
    "name": "ahmed",
    "age": 20,
    "email": "aaaaa@gmail.com",
    "password": "aaaaaaa",
    "phone": "01019278438"
}
*/