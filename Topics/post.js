const express=require('express');
const path=require('path')
const app=express()
const bodyparser=require('body-parser')
app.use(express.static("public"))

app.use(express.json(bodyparser.json()));
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname,'./front1.html'))
})
 app.post('/postdata',(req,res)=>{
    response={
        first_name:req.body.firstname,
        last_name:req.body.lastname,
    }
    console.log(response);
    res.end(JSON.stringify(response));

    
 })
 
 
 app.listen('2000',()=>{
    console.log("running 2000");
    
 })