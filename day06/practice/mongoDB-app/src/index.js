const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'

const dbName = 'task-manger'

mongoClient.connect(connectionUrl, (error, client) => {
    if (error) {
        return console.log('Error has be occurred')
    }
    console.log('Success');
    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'ahmed radi',
    //     age: 22
    // },(error, data) => {
    //     if (error) {
    //         return console.log('Error')
    //     }
    //     console.log(data.insertedId)
    // })
    // db.collection('tasks').insertOne({
    //     description: 'takes 1',
    //     completed: true
    // },(error, data) => {
    //     if (error) {
    //         return console.log('Error')
    //     }
    //     console.log(data.insertedId)
    // })

    // db.collection('users').insertMany([
    //     {name: 'Ali', age: 21},
    //     {name: 'Moh', age: 21},
    //     {name: 's3eed', age: 21},
    //     {name: 'moon', age: 21},
    //     {name: 'me', age: 21},
    // ],(error, data) => {
    //     error ? console.log('Error') : console.error(data.insertedCount)
    // })

    // db.collection('users').findOne({_id: mongodb.ObjectId('61b5bf101f4cecda5dacf968')},(error, data) => {
    //     error ? console.log('Error has ocurred') : console.log(data)
    // })

    // db.collection('tasks').findOne({completed: true},(error, data) => {
    //     error ? console.log('Error has ocurred') : console.log(data)
    // })

    // db.collection('users').find({}).toArray((error, user) => {
    //     error ? console.log('Error has ocurred') : console.log(user)
    // })

    // db.collection('users').find({}).count((error, user) => {
    //     error ? console.log('Error has ocurred') : console.log(user)
    // })

    // db.collection('users').find({}).limit(4).toArray((error, user) => {
    //     error ? console.log('Error has ocurred') : console.log(user)
    // })

    /***********************************************************************************/

    db.collection('users').updateOne({_id:mongodb.ObjectId('61b5bf101f4cecda5dacf968')},{
        $set:{name: 'ahmed radi 2'},
        $inc: {age:1}
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('tasks').updateMany({}, {
        $set: {completed: true},
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })


    db.collection('users').deleteOne({_id: mongodb.ObjectId('61b5bf101f4cecda5dacf96a')})
    .then((result) => {
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })

    db.collection('tasks').deleteMany({})
    .then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})