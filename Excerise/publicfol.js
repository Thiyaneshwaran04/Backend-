const express=require("express");
const app=express()
const path=require('path')

app.use(express.static(path.join(__dirname,"../public/images")));

app.get("/",(req,res)=>{
    res.end("hi")
})
app.listen(2001,()=>{
    console.log("running in 2000");
    
})