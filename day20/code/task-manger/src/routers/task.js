const express = require('express')
const Task = require('../models/task')
const router = new express.Router()
const auth = require('../middelware/auth')

// router.post('/tasks',async(req,res)=>{
//     try{
//         const task = new Task(req.body)
//         await task.save()
//         res.status(201).send(task)
//     }
//     catch(e){
//         res.status(400).send(e.message)
//     }
// })

// router.get('/tasks',async(req,res)=>{
//     try{
//         const tasks = await Task.find({})
//         res.send(tasks)
//     }
//     catch(e){
//         res.status(500).send(e.message)
//     }
// })

router.get('/tasks/:id',auth,async(req,res)=>{
    // console.log(req.user)
    try{
        const _id = req.params.id

        // 61baf6cc7d3e39578f9440ef , 61baf5d37d3e39578f9440de
        // 0e9
        // 0e2 , 0de
        const task = await Task.findOne({_id,owner:req.user._id})
        if(!task){
            return res.status(404).send('Not found')
        }
        res.status(200).send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
})

// router.patch('/tasks/:id',async(req,res)=>{
//     try{
//         const updates = Object.keys(req.body)
//         const allowedupdates = ['description','completed']
//         const isValid = updates.every((update)=> allowedupdates.includes(update))
//         if(!isValid){
//             return res.status(400).send("Can't update title")
//         }
//         const task = await Task.findById(req.params.id)
//         updates.forEach((update)=>task[update]= req.body[update])
//         if(!task){
//             return res.status(404).send("No task is found")
//         }
//        await task.save()
//         res.status(200).send(task)

//     }
//     catch(e){
//         res.status(400).send(e.message)
//     }
    
    
// })

// router.delete('/tasks/:id',async(req,res)=>{
//     try{
//         const _id = req.params.id
//         const task = await Task.findByIdAndDelete(_id)
//         if(!task){
//             return res.status(404).send('Not found')
//         }
//         res.status(200).send(task)
//     }
//     catch(e){
//         res.status(500).send(e.message)
//     }
    
// })

//////////////////////////////////////////////////////////////////////////////////////////



router.post('/tasks',auth,async(req,res)=>{
    try{
        // const task = new Task(req.body)
        // spread operator
        const task = new Task({...req.body,owner:req.user._id})
        await task.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/tasks',auth,async(req,res)=>{
    try{
        // const tasks = await Task.find({})
        await req.user.populate('tasks')
        res.send(req.user.tasks)
    }
    catch(e){
        res.status(500).send(e)
    }
})

// router.get('/tasks/:id',auth,async(req,res)=>{
//     console.log(req.user)
//     try{
//         const _id = req.params.id
//         // const task = await Task.findById(_id)
//         // 61baf64a7d3e39578f9440e5 , 61baf5d37d3e39578f9440de
//         // 61baf6927d3e39578f9440e9 (current logged in user osama)
//         // const task = await Task.findOne({_id:0e5,owner:0e9})

//         // 61baf8776538eb6ef40b041c , 61bb026a9443ff127c1c18dc (No task)
//         // 61baf6cc7d3e39578f9440ef , 61baf5d37d3e39578f9440de
//         // 61baf64a7d3e39578f9440e5 , 61baf5d37d3e39578f9440de (Success)
//         const task = await Task.findOne({_id,owner:req.user._id})
//         if(!task){
//             return res.status(404).send('Not found')
//         }
//         res.status(200).send(task)
//     }
//     catch(e){
//         res.status(500).send(e.message)
//     }
// })

router.patch('/tasks/:id',auth,async(req,res)=>{
    // console.log(req.user)
    try{
        const updates = Object.keys(req.body)
        const allowedupdates = ['description','completed']
        const isValid = updates.every((update)=> allowedupdates.includes(update))
        if(!isValid){
            return res.status(400).send("Can't update title")
        }
        const _id = req.params.id
        //  61baf61d7d3e39578f9440e2    ,61baf5d37d3e39578f9440de
        const task = await Task.findOne({_id,owner:req.user._id})  // null
        if(!task){
            console.log('test')
            return res.status(404).send("No task is found")
        }
        updates.forEach((update)=> task[update]= req.body[update])
        
       await task.save()
        res.status(200).send(task)

    }
    catch(e){
        res.status(400).send(e)
    }
    
    
})

router.delete('/tasks/:id',auth,async(req,res)=>{
    try{
        const _id = req.params.id
        const task = await Task.findOneAndDelete({_id,owner:req.user._id})
        if(!task){
            return res.status(404).send('Not found')
        }
        res.status(200).send(task)
    }
    catch(e){
        res.status(500).send(e)
    }
    
})


module.exports = router