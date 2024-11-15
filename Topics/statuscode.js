const express=require("express");
const app=express()


app.get('/',(req,res)=>{
    const { firstname, lastname } = req.query; 
   if(!firstname || !lastname){
    res.status(400).send({'message':"Required Firstname,Lastname"})
    
    
   }
   else{
    res.status(200).send({'message':"Success"})
   }

   console.log(req.query);
})
app.listen(2000,()=>{
    console.log("running in 2000");
    
})