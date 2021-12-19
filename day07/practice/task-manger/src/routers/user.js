const express = require('express')

const router = express.Router()

const User = require('../models/users')

router.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(() => {
        res.status(200).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

/**************************************/
router.get('/users', (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

/*******************************************/

router.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send('User Not found')
        }
        res.status(200).send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

/*******************************************/

router.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'age', 'email']
    const isValid = updates.every((el) => allowedUpdate.includes(el))

    if (!isValid) {
        res.status(400).send("Can't Update")
    }

    try{
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id,req.body,{
            new: true,
            runValidators: true
        })
        if (!user) {
            return res.status(404).send('User Not found')
        }
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error)
    }

})

router.delete('/users/:id', async (req , res) => {
    try {
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id)
        if(!user) {
            return res.status(404).send('User Not found')
        }
        res.status(200).send(user)
    }catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router