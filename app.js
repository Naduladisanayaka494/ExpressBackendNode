const express = require("express");
const app=express();
const mongoose=require("mongoose")
require("dotenv/config");
const bodyParser=require("body-parser");

//middleware
app.use(bodyParser.json());
//impor routes
const postRoutes= require("./routes/posts")

app.use("/post",postRoutes)





//routes
app.get("/",(req,res)=>{
    res.send("i am sending something")
})

app.get("/post",(req,res)=>{
    res.send("i am inside the port")
})

//create a litneing port
app.listen(3000);
//mongodb connection
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected")
})