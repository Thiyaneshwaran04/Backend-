const express=require("express");
const app=express()
const bodyparser=require("body-parser")
app.use(express.json(bodyparser.json()));

let data=[
    {"id":1,
        "hero":"vijay"
    },
    {"id":2,
        "hero":"ajith"
    }
]

app.get('/',(req,res)=>{
    res.status(200).send({"message":"get successfull","code":200,"data":{data}})

})
app.post('/',(req,res)=>{
    response={
        id:req.body.id,
        hero:req.body.hero
    }
    data.push(response)
    res.status(202).send({"message":"created successfull","code":202,"data":{data}})
})
app.put('/',(req,res)=>{
   let response={
        id:req.body.id,
        hero:req.body.hero
    }
    
    data.forEach((e)=>{
        if(e.id== response.id){
            e.id=response.id
            e.hero=response.hero
            res.status(200).send({"message":"update successfull","code":202,"data":{data}})
        }
      
       
    })

})

app.delete('/:yt',(req,res)=>{
    let index=req.params.yt
    let up=index-1
    console.log(index);
    // console.log(,"rw");
    
    if(index){
        data.splice(up,1)
        res.status(200).send({"message":"delete successfull","code":200,"data":{data}})
    }
  else{
    res.status(400).send({"message":"not delete successfull","code":400,"data":{data}})
  }
})

app.listen(2000,()=>{
    console.log("running in 2000");
    
})