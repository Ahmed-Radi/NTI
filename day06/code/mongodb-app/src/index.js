const mongodb = require('mongodb')

// Intalize connection --> CRUD operations 
const mongoClient = mongodb.MongoClient

// 127.0.0.1 (Ip address) = localhost
const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName= 'task-manger'

mongoClient.connect(connectionUrl,(error,client)=>{
    if(error){
       return console.log('Error has occurred')
    }
    console.log('Success')
    const db = client.db(dbName)

    // Insert data 
    // InsertOne --> insert single document
    // tasks --> description:'task1' completed:
    db.collection('users').insertOne({
        name:'Amr                                              ',
        age:-30
    },(error,data)=>{
        if(error){
            return console.log('Error')
        }
        console.log(data.insertedId)
    }) 

    // db.collection('tasks').insertOne({
    //     descritption:'Task1',
    //     completed:false
    // })

    // InsertMany --> add multiple documents

    // db.collection('users').insertMany([
    //     {name:'Omar',age:30},
    //     {name:'Osama',age:20},
    //     {name:'Zain',age:10},
    //     {name:'Salma',age:40},
    //     {name:'Ali',age:20},
    // ],(error,data)=>{
    //     if(error){
    //         return console.log('Eror')
    //     }
    //     console.log(data.insertedCount)
    // })

    // const objectId =  mongodb.ObjectId // create objectId
    // const _id = new objectId()
    // console.log(_id)
    // db.collection('users').insertOne({
    //     _id,
    //     name:'Yassin',
    //     age:40
    // })

    // Read 
    // fetch one document 
    // fetch multiple documents

    // cretria --> condition 

    // db.collection('users').findOne({age:20},(error,data)=>{
    //     if(error){
    //         return console.log('Error has occurred')
    //     }
    //     console.log(data)
    // })

    // db.collection('users').findOne({_id: mongodb.ObjectId('61b5ba0561a272b148c67ed4')},(error,data)=>{
    //     if(error){
    //         return console.log('Error has occurred')
    //     }
    //     console.log(data)
    // })

    // db.collection('users').find({}).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Error')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({}).count((error,users)=>{
    //     if(error){
    //         return console.log('Error')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({}).limit(4).toArray((error,users)=>{
    //     if(error){
    //         return console.log('Error')
    //     }
    //     console.log(users)
    // })

    ///////////////////////////////////////////////////////////////////////////

    // update
    // update operators
//     db.collection('users').updateOne({_id:mongodb.ObjectId('61b5b5d9a26cf02250c4d189')},
//   {
//     //   $set:{name:'Zain',address:'egypt'},
//       $set:{name:'Omar'},
//       $inc:{age:5}
//   }).then((result)=>{
//       console.log(result.modifiedCount)
//   }).catch((error)=>{
//       console.log(error)
//   })

//   db.collection('users').updateMany({},{
//       $set:{salary:1000}
//   }).then((result)=>{
//       console.log(result.modifiedCount)
//   }).catch((error)=>{
//       console.log(error)
//   })


//   db.collection('users').deleteOne({_id:mongodb.ObjectId('61b5b5d9a26cf02250c4d189')})
//   .then((result)=>{
//       console.log(result.deletedCount)
//   }).catch((error)=>{
//       console.log(error)
//   })

//   db.collection('users').deleteMany({})
//   .then((result)=>{console.log(result.deletedCount)})
//   .catch((error)=>{console.log(error)})



})