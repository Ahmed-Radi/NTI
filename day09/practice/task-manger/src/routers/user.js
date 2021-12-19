const express = require('express')

const router = express.Router()

const User = require('../models/users')
const auth = require('../middleware/auth')

// router.post('/users', (req, res) => {
//     const user = new User(req.body);
//     user.save().then(() => {
//         res.status(200).send(user)
//     }).catch((error) => {
//         res.status(400).send(error)
//     })
// })

/***************** version 2*****************************/

router.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateToken();
        res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send(error.message)
    }
})

/**************************************/

// get all

router.get('/users', auth, (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

/*******************************************/

// get By ID

router.get('/users/:id', auth,(req, res) => {
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

// Update

// router.patch('/users/:id', async (req, res) => {

//     const updates = Object.keys(req.body)
//     const allowedUpdate = ['name', 'age', 'email']
//     const isValid = updates.every((el) => allowedUpdate.includes(el))

//     if (!isValid) {
//         res.status(400).send("Can't Update")
//     }

//     try{
//         const _id = req.params.id
//         const user = await User.findByIdAndUpdate(_id,req.body,{
//             new: true,
//             runValidators: true
//         })
//         if (!user) {
//             return res.status(404).send('User Not found')
//         }
//         res.status(200).send(user)
//     } catch (error) {
//         res.status(500).send(error)
//     }

// })

/********************  version 2 *****************************/

// Update

router.patch('/users/:id', auth, async (req, res) => {

    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'age', 'email','password']
    const isValid = updates.every((el) => allowedUpdate.includes(el))

    if (!isValid) {
        return res.status(400).send("Can't Update")
    }

    try{
        const _id = req.params.id
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send('User Not found')
        }
        updates.forEach(el => (user[el] = req.body[el]))
        await user.save()
        res.status(200).send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }

})

/**************************************/

router.delete('/users/:id', auth, async (req , res) => {
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

/*******************************************/

// Login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({user, token})
    } catch (err) {
        res.status(500).send(err.message)
    }
})

//logout

router.delete('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token !== req.token
        })
        await req.user.save()
        res.status(200).send('Logout !!')
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.delete('/logoutall', auth, async (req, res) => {
    try {
        req.user.tokens = []
        req.user.save()
        await res.status(200).send('logout all')
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Profile

router.get('/profile', auth, async (req, res) => {
    res.send(req.user)
})

module.exports = router