const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middelware/auth')

// CRUD Operations 
// post user --> (SignUp)
// create --> post
// read --> get
// update --> patch 
// delete --> delete

// Version 1
// router.post('/users',(req,res)=>{
//     // console.log(req.body)
//     const user = new User(req.body)
//     user.save().then(()=>{
//         res.status(200).send(user)
//     }).catch((error)=>{
//         res.status(400).send(error)
//     })
// })

////////////////////////////////////////////////////////////////////////////////////////

// Version 2 (token)

router.post('/users',async(req,res)=>{
    try{
        /**
         *   "name":"amr",
            "age":40,
             "email":"amr@gmail.com",
            "password":"123456"
         */
        const user = new User(req.body)
        const token = await user.generateToken()
        await user.save()
        res.status(200).send({user,token})
    }
    catch(e){
        res.status(400).send(e.message)
    }
})

/////////////////////////////////////////////////////////////////////////////////////

// login 

router.post('/login',async(req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email,req.body.password)
        const token = await user.generateToken()
        res.status(200).send({user,token})
    }
    catch(error){
        res.status(500).send(error.message)
    }
})


/////////////////////////////////////////////////////////////////////////////////

// get all documents

// new request --> do sth (check token valid) --> run route handler

router.get('/users',auth,(req,res)=>{
    User.find({}).then((data)=>{
        res.status(200).send(data)
    }).catch((e)=>{
        res.status(500).send(e)
    })
})
//////////////////////////////////////////////////////////////////////////////////////

// get by id 

router.get('/users/:id',auth,(req,res)=>{
    // console.log(req.params) 
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

//////////////////////////////////////////////////////////////////////////////////

router.get('/profile',auth,(req,res)=>{
    res.send(req.user)
})

/////////////////////////////////////////////////////////////////////////////////

// logout

/**
 *   "tokens": [
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1NjA4MTh9.m2imQY2GiOMop0G0nzszroOo6HHv9VEGVCDizqa7k1A",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1Njc0NTJ9.iI9xn6JFSgNPVPsXtWDRyRrpe3HR1yscztO20EXriPk"
        ],
 */
router.delete('/logout',auth,async(req,res)=>{
    // console.log(req.user)
    try{
        // new array 
        req.user.tokens = req.user.tokens.filter((el)=>{
            // 12 !== 123  T
            // 1 !== 123 T
            // 2 !== 123 T
            // 123 !== 123  F
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1NjA4MTh9.m2imQY2GiOMop0G0nzszroOo6HHv9VEGVCDizqa7k1A" !== eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1Njc0NTJ9.iI9xn6JFSgNPVPsXtWDRyRrpe3HR1yscztO20EXriPk
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1Njc0NTJ9.iI9xn6JFSgNPVPsXtWDRyRrpe3HR1yscztO20EXriPk" !==  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWI5YjY3Mjk2NDM4NTQ1MjAwZDJmZTkiLCJpYXQiOjE2Mzk1Njc0NTJ9.iI9xn6JFSgNPVPsXtWDRyRrpe3HR1yscztO20EXriPk"    
       // cbl !== NDG  T
     
return el !== req.token

        })
        await req.user.save()
        res.status(200).send('Logout successfully')
    }
    catch(e){
        res.status(500).send(e.message)
    }
})
////////////////////////////////////////////////////////////////////////////////////////

// logout all

router.delete('/logoutall',auth,async(req,res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send('Logout all success')
    }
    catch(e){
        res.status(500).send(e.message)
    }
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

// Version 2 (Before password)

// router.patch('/users/:id',async(req,res)=>{
//     // console.log(req.params)

//     const updates = Object.keys(req.body) // ['name','email']
//     const allowedUpdates = ['name','age','password']

//     // name -- name T
//     // age -- age T
//     // email F
//     let isValid = updates.every((el)=> allowedUpdates.includes(el))
//     console.log(isValid)
// // true --> !true = false
// // false --> !false = true
//     if(!isValid){
//        return res.status(400).send("Can't update")
//     }
//     console.log(updates)
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

//////////////////////////////////////////////////////////////////////////////////////////

// Version 3 (After password)

router.patch('/users/:id',auth,async(req,res)=>{
    // console.log(req.params)

    const updates = Object.keys(req.body) // ['name','email']
    const allowedUpdates = ['name','age','password']

    // name -- name T
    // age -- age T
    // email F
    let isValid = updates.every((el)=> allowedUpdates.includes(el))
    // console.log(isValid)
// true --> !true = false
// false --> !false = true
    if(!isValid){
       return res.status(400).send("Can't update")
    }
    console.log(updates)
    try{
        const _id = req.params.id
       const user = await User.findById(_id)
        if(!user){
            return res.status(404).send('No user is found')
        }
        // ["name","password"]
        // user --> Database  // req.body --> current data (postman)
        //                       omar  = yassin
        // password
        // updates.forEach((name)=>(user[name]= req.body[name]))
        // //                            123456 = 1234567
        // updates.forEach((password)=>(user[password]= req.body[password]))
        // user.name = req.body.name
        // user.password = req.body.password
        //                     // user[name]

        updates.forEach((el)=>(user[el]= req.body[el]))
        await user.save()
        res.status(200).send(user)
    }
    catch(error){
        res.status(500).send(error.message)
        // console.log(error.message)
    }
    
})

router.delete('/users/:id', auth,async(req,res)=>{
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