const express=require("express");
const app=express()
const path=require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'.views/htmls.html'))
})
app.listen(2000,()=>{
    console.log("running in 2000");
    
})


