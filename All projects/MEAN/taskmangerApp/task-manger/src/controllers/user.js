const User = require('../models/users');

const userSignUp = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateToken();
        res.status(200).send({user,token})
    } catch (error) {
        res.status(400).send(error)
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
        res.status(500).send(error)
    }
}

const editprofile = async (req, res) => {
    try {
        const updates = Object.keys(req.body)
        const allowedUpdate = ['name']
        const isValid = updates.every((el) => allowedUpdate.includes(el))

        if (!isValid) {
            return res.status(400).send("cant update")
        }
        if (!req.user) {
            return res.status(404).send('User Not found')
        }
        updates.forEach(el => (req.user[el] = req.body[el]))
        await req.user.save()
        res.status(200).send(req.user)
        // console.log(req.user)
    } catch (e) {
        console.log(e)
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
        res.status(500).send(err)
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findByCredential(req.body.email, req.body.password)
        const token = await user.generateToken()
        res.status(200).send({user, token})
    } catch (err) {
        res.status(500).send(err)
    }
}

const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token !== req.token
        })
        await req.user.save()
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

const logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        req.user.save()
        await res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

const profile = async (req, res) => {
    res.send(req.user)
}

const addImage =  async (req, res) => {
    try {
        req.user.avatar = req.file.buffer
        await req.user.save()
        res.status(200).send()
    } catch (e) {
        res.status(500).send(e)
    }
}

const deleteImage = async (req, res) => {
    try {
        req.user.avatar = undefined
        await req.user.save()
        // console.log(req.user)
        res.status(200).send()
    } catch (e) {
        console.log(e)
        res.status(500).send()
    }
}

module.exports = {
    userSignUp,
    getAllUsers,
    getUserById,
    editUser,
    editprofile,
    deleteUser,
    login,
    logout,
    logoutAll,
    profile,
    addImage,
    deleteImage
}