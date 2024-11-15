const express=require('express');
const path=require('path')
const app=express();
const bodyparser=require("body-parser")
app.use(express.json(bodyparser.json()))
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'./front.html'))
})

 app.get('/getdata',(req,res)=>{
    response={
        first_name:req.query.firstname,
        last_name:req.query.lastname,
    }
    console.log(response);
    res.end(JSON.stringify(response));

    
 })
 app.listen(3000,()=>{
    console.log("running 2000");
    
 })
let name={
   "name":'Thiyanesh',
   "name2":'Arun'
 }

 
 app.get('/myname=id',(req,res)=>{
   console.log(req.params.id);
   console.log(req.body);
   
   
   
res.send(name)

 })
