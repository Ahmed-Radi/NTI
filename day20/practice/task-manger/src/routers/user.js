const express = require('express')
const controller = require('../controllers/user')
const router = express.Router()
const multer = require('multer')
const auth = require('../middleware/auth')


// Add user

router.post('/users', controller.userSignUp )

// Get all

router.get('/users', auth, controller.getAllUsers)

// Get By ID

router.get('/users/:id', auth, controller.getUserById)

// Update

router.patch('/users/:id', auth, controller.editUser)

// Update

router.patch('/editprofile', auth, controller.editprofile)

// Delete

router.delete('/users/:id', auth, controller.deleteUser)

// Login

router.post('/login', controller.login)

// Logout

router.delete('/logout', auth, controller.logout)

// Logout All

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

// Delete image

router.delete('/profile/deleteavatar', auth, controller.deleteImage)

module.exports = router

/*

{
    "name": "aaaasssssssaaa",
    "email": "AhmedRadi@gmail.com",
    "age":50,
    "password": "aaaaaa"
}

*/