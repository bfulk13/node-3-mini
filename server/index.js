const express = require('express')
require('dotenv').config()
const {json} = require('body-parser')
const session = require('express-session')
const app = express()
const {SESSION_SECRET, SERVER_PORT} = process.env

const mc = require('./messagesCtrl')

app.use(json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.get(`/api/messages`, mc.getAllMessages)
app.get(`/api/messages/history`, mc.history)
app.post(`/api/messages`, mc.createMessage)

const PORT = SERVER_PORT || 3005
app.listen(PORT, () => console.log(`Port ${PORT} is alive!`))