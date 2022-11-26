const User = require('../models/users');

const userSignUp = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateToken();
        res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send(error.message)
    }
}

const getAllUsers = (req, res) => {
    User.find({}).then((data) => {
        res.status(200).send(data)
    }).catch((error) => {
        res.status(500).send(error)
    })
}

const getUserById = (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send('User Not found')
        }
        res.status(200).send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
}

const editUser =  async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdate = ['name', 'age', 'email','password']
    const isValid = updates.every((el) => allowedUpdate.includes(el))

    if (!isValid) {
        res.status(400).send("Can't Update user")
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
}

const deleteUser = async (req , res) => {
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
}

const login = async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({user, token})
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token !== req.token
        })
        await req.user.save()
        res.status(200).send('Logout !!')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        req.user.save()
        await res.status(200).send('logout all')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

const profile = async (req, res) => {
    res.send(req.user)
}

const addImage =  async (req, res) => {
    try {
        req.user.avatar = req.file.buffer
        await req.user.save()
        res.status(200).send('Image Uploaded')
    } catch (e) {
        res.status(500).send(e.message)
    }
}

module.exports = {
    userSignUp,
    getAllUsers,
    getUserById,
    editUser,
    deleteUser,
    login,
    logout,
    logoutAll,
    profile,
    addImage
}