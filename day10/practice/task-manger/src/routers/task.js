const express = require('express');
const router = express.Router()
const Task = require('../modules/task');
const auth = require('../middleware/auth')
// // POST - Save data

// router.post('/tasks', (req, res) => {
//     const task = Task(req.body)
//     task.save().then(() => {
//         res.status(200).send(task)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })

// /*******************************************/

// // GET - Find all data

// router.get('/tasks', (req, res) => {
//     const _id = req.params.id
//     Task.find({}).then((data) => {
//         if (!data) {
//             return res.status(404).send('No tasks')
//         }
//         res.status(200).send(data)
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// })

// /*******************************************/

// // GET - Find data by ID

// router.get('/task/:id', (req, res) => {
//     const _id = req.params.id
//     Task.findById(_id).then((data) => {
//         if (!data) {
//             return res.status(404).send('No tasks')
//         }
//         res.status(200).send(data)
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// })

// /*******************************************/

// // PATCH - Update By ID

// router.patch('/task/:id', (req, res) => {
//     const update = Object.keys(req.body)
//     const allowToUpdate = ['description', 'complete']
//     const isValid = update.every((el) => allowToUpdate.includes(el))

//     if (!isValid) {
//         res.status(400).send("Can't Update")
//     }

//     const _id = req.params.id
//     const task = Task.findByIdAndUpdate(_id, req.body, {
//         new: true,
//         runValidators: true
//     }).then((task) => {
//         if (!task) {
//             return res.status(404).send('Not Found')
//         }
//         res.status(200).send(task)
//     }).catch((error) => {
//         res.status(500).send(error.message)
//     })

// })

// /*******************************************/

// // DELETE - Delete By ID

// router.delete('/task/:id', (req, res) => {
//     try{
//         const _id = req.params.id
//         const task = Task.findByIdAndDelete(_id).then((task) => {
//             if (!task) {
//                 return res.status(400).send("Can't Delete")
//             }
//             res.status(200).send(task)
//         })
//     } catch(error) {
//         res.status(500).send(error.message)
//     }
// })

/********************* Version 2 ************************************/

// POST - Save data

router.post('/tasks', auth, async (req, res) => {
    try {
        const task = Task({...req.body,owner: req.user._id})
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e.message)
    }
})

/*******************************************/

// GET - Find all data

router.get('/tasks', auth ,async (req, res) => {
    try {
        await req.user.populate('tasks')
        res.status(200).send(req.user.tasks)
    } catch(err) {
        res.status(500).send(err)
    }
})

/*******************************************/

// GET - Find data by ID

router.get('/tasks/:id', auth, async (req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findOne({_id,owner: req.user._id})
        if (!task) {
            return res.status(404).send('Task Not Found')
        }
        res.status(200).send(task)
    } catch(err) {
        res.status(500).send(err)
    }
})

/*******************************************/

// PATCH - Update By ID

router.patch('/task/:id', auth, async (req, res) => {
    try {
        const update = Object.keys(req.body)
        const allowToUpdate = ['description', 'complete']
        const isValid = update.every((el) => allowToUpdate.includes(el))

        if (!isValid) {
            res.status(400).send("Can't Update")
        }

        const _id = req.params.id
        const task = await Task.findOne({_id, owner: req.user._id})

        if (!task) {
            return res.status(404).send('Task Not Found')
        }
        update.forEach(update => task[update] = req.body[update])

        await task.save()
        res.status(200).send(task)
    } catch(error) {
        res.status(500).send(error.message)
    }

})

/*******************************************/

// DELETE - Delete By ID

router.delete('/task/:id', auth, async (req, res) => {
    try{
        const _id = req.params.id
        const task = await Task.findOneAndDelete({_id, owner: req.user._id})
            if (!task) {
                return res.status(400).send("Can't Delete")
            }
            res.status(200).send(task)
    } catch(error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

/**
 *
 *  "name":"ahmed 2",
    "email":"ahmed@gmail.com",
    "age": 20,
    "password" : "aaaaaa"
 */

    // "title": "aa aa aa",
    // "description":"ahmedaadasdaddasaa@gmail.com"