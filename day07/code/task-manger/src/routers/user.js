const express = require('express')
const router = new express.Router()
const User = require('../models/user')

// CRUD Operations 
// post user --> (SignUp)
// create --> post
// read --> get
// update --> patch 
// delete --> delete

router.post('/users',(req,res)=>{
    // console.log(req.body)
    const user = new User(req.body)
    user.save().then(()=>{
        res.status(200).send(user)
    }).catch((error)=>{
        res.status(400).send(error)
    })
})

/////////////////////////////////////////////////////////////////////////////////

// get all documents

router.get('/users',(req,res)=>{
    User.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})
//////////////////////////////////////////////////////////////////////////////////////

// get by id 

router.get('/users/:id',(req,res)=>{
    console.log(req.params) 
    // console.log(req.params.id)
    const _id = req.params.id
    User.findById(_id).then((user)=>{
        // console.log(user)
        if(!user){
            return res.status(404).send('Unable to find user')
        }
        res.status(200).send(user)
    }).catch((error)=>{
        res.status(500).send(error)
    })
})
////////////////////////////////////////////////////////////////////////////////////////

// Version 1
// router.patch('/users/:id',async(req,res)=>{
//     // console.log(req.params)
//     try{
//         const _id = req.params.id
//         const user = await User.findByIdAndUpdate(_id,req.body,{
//             new:true,
//             runValidators:true
//         })
//         if(!user){
//             return res.status(404).send('No user is found')
//         }
//         res.status(200).send(user)
//     }
//     catch(error){
//         res.status(500).send(error.message)
//         // console.log(error.message)
//     }
    
// })

/////////////////////////////////////////////////////////////////////////////////////

// Version 2

router.patch('/users/:id',async(req,res)=>{
    // console.log(req.params)

    const updates = Object.keys(req.body) // ['name','email']
    const allowedUpdates = ['name','age']

    // name -- name T
    // age -- age T
    // email F
    let isValid = updates.every((el)=> allowedUpdates.includes(el))
    console.log(isValid)
// true --> !true = false
// false --> !false = true
    if(!isValid){
       return res.status(400).send("Can't update")
    }
    console.log(updates)
    try{
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id,req.body,{
            new:true,
            runValidators:true
        })
        if(!user){
            return res.status(404).send('No user is found')
        }
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error.message)
        // console.log(error.message)
    }
    
})

router.delete('/users/:id', async(req,res)=>{
    try{
         const _id = req.params.id
         const user = await User.findByIdAndDelete(_id)
         if(!user){
             return res.status(404).send('No user is found')
         }
         res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
   
    
})

//  Model --> task.js title description completed
// routers --> task,js desctiption,completed
module.exports = router