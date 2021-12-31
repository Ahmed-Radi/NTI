const Task = require('../models/task');

const addTask = async (req, res) => {
    try {
        const task = Task({...req.body,owner: req.user._id})
        await task.save()
        res.status(201).send(task)
    } catch(e) {
        res.status(400).send(e)
    }
}

const getAllTasks = async (req, res) => {
    try {
        await req.user.populate('tasks')
        res.status(200).send(req.user.tasks)
    } catch(err) {
        res.status(500).send(err)
    }
}

const getTaskById = async (req, res) => {
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
}

const editTask = async (req, res) => {
    try {
        const update = Object.keys(req.body)
        const allowToUpdate = ['title', 'description', 'complete']
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
        res.status(500).send(error)
    }
}

const deleteTask = async (req, res) => {
    try{
        const _id = req.params.id
        const task = await Task.findOneAndDelete({_id, owner: req.user._id})
        if (!task) {
            return res.status(400).send("Can't Delete")
        }
        res.status(200).send(task)
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    addTask,
    getAllTasks,
    getTaskById,
    editTask,
    deleteTask,
}