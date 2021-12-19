const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()
const multer = require('multer')
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

router.post('/users', controller.userSignUp )

/**************************************/

// get all

router.get('/users', auth, controller.getAllUsers)

/*******************************************/

// get By ID

router.get('/users/:id', auth, controller.getUserById)

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

router.patch('/users/:id', auth, controller.editUser)

// Delete

router.delete('/users/:id', auth, controller.deleteUser)

// Login

router.post('/login', controller.login)

//logout

router.delete('/logout', auth, controller.logout)

//logout All

router.delete('/logoutall', auth, controller.logoutAll)

// Profile

router.get('/profile', auth, controller.profile)

// Add image

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

router.post('/profile/avatar', auth, uploads.single('avatar'), controller.addImage)



module.exports = router