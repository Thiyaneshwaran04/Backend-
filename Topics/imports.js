const express=require("express");
const add=require('./exports.js')
    const app=express()

    app.get('/',(req,res)=>{
        res.end("hi")
    })
    app.listen(2002,()=>{
        console.log("running import");
        
    })
