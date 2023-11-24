const express=require("express")
const connect = require("./connectDB")
// create instance
const app=express()
// midlware
app.use(express.json())  
// require dotnev
require('dotenv').config() 
 //connecting   to bd
 connect()

 const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

// require routes
app.use((req,res)=>{
    res.send("API is running")
    })

//create port
const PORT=process.env.PORT  
//create server
app.listen(PORT,(error)=>{
    error?
    console.log(error):
    console.log(`server in running on port ${PORT}`)
    
})


app.use('/api/pub',require('./Routes/pubRoutes'))
app.use('/api/user',require('./Routes/userRoutes'))

