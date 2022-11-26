const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000
require('./db/mongoose')

const reporterRouter = require('./routers/reporter')
const newsRouter = require('./routers/news')

app.use(express.json())
app.use(cors())
app.use(reporterRouter)
app.use(newsRouter)

app.listen(port, console.log(`server is running http://localhost:${port}/`))