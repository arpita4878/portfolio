import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app=express()

import contactRouter from './routes/contact.router.js'


//config to fetch req.body content
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//configuration to solve cross-origin problem
app.use(cors())

//router level middleware used to link routes
app.use("/user",contactRouter)

app.listen(3001)
console.log("server invoked at 3001 port");

