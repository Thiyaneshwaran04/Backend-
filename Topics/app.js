const express=require("express");
const app=express()


app.get('/',(req,res)=>{
    res.writeHead("200","error")
    res.end("hello World")
})
app.listen(2000,()=>{
    console.log("running in 2000");
    
})