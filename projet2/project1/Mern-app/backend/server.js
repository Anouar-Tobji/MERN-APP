const express = require('express')
// const notes = require ('./data/notes')
// const Note = require ("./models/noteModel")
const dotenv = require('dotenv')
const  connectDB  = require('./config/db')
const userRoutes= require ('./routes/userRoutes')
// const path =require ('path');
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



// __dirname = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/front-end/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "front-end", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }
  

   app.use(notFound)
   app.use(errorHandler)

    const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`server started on port ${PORT}`))
