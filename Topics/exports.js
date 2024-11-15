const express=require("express");
    const app=express()

    app.get('/',(req,res)=>{
        res.end("hi")
    })
    app.listen(2001,()=>{
        console.log("running export");
        
    })

    let name={
        "name":'Thiyanesh',
        "name2":'Arun'
      }
     
      
    let add=function (a,b){
        return (a+b)
         }
         
        exports.name
        
        module.exports={name,add}