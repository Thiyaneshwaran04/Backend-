const express=require("express");
const app=express()
const bodyparser=require("body-parser")
app.use(express.json(bodyparser.json()));

let items=[
    {'id':1,"name":"kadavelay"},
    {'id':2,"name":"Ajithey"}
]

app.get('/',(req,res)=>{
    console.log(items);
    res.send(items)
})
app.post('/post',(req,res)=>{
   
   let ress={
        id:req.body.id,
        name:req.body.name
       }
   if(ress){
   
       items.push(ress)
       res.status(202).send({'message':"Success",'code':202,'data':items})
    
   }
  
})
app.put('/put',(req,res)=>{
    const item=req.body;
    console.log(item)
    items.forEach((e)=>{
        if(item.id==e.id){
            e.name=item.name;
            return res.status(202).send({'message':"Success",'code':202,'data':items})
        }
        else{
            return res.status(400).send({"message":'Id not Found'});

        }
       
    });

})
app.delete('/',(req,res)=>{
    let ress={
        id:req.body.id,
        name:req.body.name
       }
items.map((e)=>{
    if(e.id==ress.id){
        items.pop(e.id)
        
    }
})
 res.send(items)
})
app.listen(2000,()=>{
    console.log("running in 2000");
    
})