const express = require('express')
// const notes = require ('./data/notes')
// const Note = require ("./models/noteModel")
const dotenv = require('dotenv')
const  connectDB  = require('./config/db')
const userRoutes= require ('./routes/userRoutes')
const noteRoutes= require ('./routes/noteRoutes')
const {notFound,errorHandler} = require("./middleware/errorMiddleware")
const app = express()
dotenv.config()
connectDB()
app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('api is runnig')
// })
// app.get('/api/notess',(req,res)=>{
//     res.json(notes)})

// app.get('/api/notess',(req,res)=>Note.find(),function(err,notes){
//     res.json(notes)
// })
   app.use('/api/users',userRoutes)
   app.use('/api/notes',noteRoutes)
   app.use('/api/notess',require("./routes/notessRote"))
   app.use('/api/useress',require("./routes/usressRotes"))

   app.use(notFound)
   app.use(errorHandler)

    const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server started on port ${PORT}`))