const express=require('express');
const app=express()
const bodyparser=require("body-parser")
app.use(express.json(bodyparser.json()));


app.get("/",(req,res)=>{
    res.end("hi")

    
})
app.get("/query",(req,res)=>{
    res.end("hello")
    console.log(req.query);
    console.log(req.body)


    
})


app.listen(2002,()=>{
    console.log("server running");
    
})