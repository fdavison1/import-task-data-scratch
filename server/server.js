require('dotenv').config()
const express = require('express')
const massive = require('massive')
// const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const tc = require('./controller')

const app = express()

//middleware---------------------------------------------------------------------
app.use(express.json())
//app.use(session...)

//endpoints---------------------------------------------------------------------
//AUTH


//TASKS
app.get('/api/tasks', tc.getTasks)

//PROJECTS

//listening---------------------------------------------------------------------
massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.listen(SERVER_PORT, () => console.log(`port ${SERVER_PORT} is working?`))
})