const express = require('express')

const app = express()

app.use(express.static(__dirname + '/dist/news-app'))

app.get('*',(req,res)=>{
  res.sendFile('index.html',{root:'dist/news-app/'})
})

app.listen(process.env.PORT)
