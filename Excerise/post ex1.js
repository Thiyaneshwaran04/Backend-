const express=require("express");
const app=express()
const bodyparser=require("body-parser")
app.use(express.json(bodyparser.json()));

app.get('/',(req,res)=>{
   
    res.end("hello World")
})
app.post("/post",(req,res)=>{
    console.log(req.body);
    
})

app.listen(2000,()=>{
    console.log("running in 2000");
    
})