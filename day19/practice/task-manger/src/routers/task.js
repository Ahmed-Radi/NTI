const express = require('express');
const router = express.Router()
const auth = require('../middleware/auth')
const controller = require('../controllers/task');

// POST - Save data

router.post('/tasks', auth, controller.addTask)

/*******************************************/

// GET - Find all data

router.get('/tasks', auth, controller.getAllTasks)

/*******************************************/

// GET - Find data by ID

router.get('/tasks/:id', auth, controller.getTaskById)

/*******************************************/

// PATCH - Update By ID

router.patch('/task/:id', auth, controller.editTask)

/*******************************************/

// DELETE - Delete By ID

router.delete('/task/:id', auth, controller.deleteTask)

module.exports = router

/**

{
    "title": "ahmed",
    "description": "Ahmed Radi",
    "complete": true
}

**/