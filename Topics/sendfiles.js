const express=require("express");
const app=express();
const path=require("path")
const port=4000
app.use(express.static(path.join(__dirname,"y")));
app.get('/',(req,res)=>{
 res.sendFile(path.join(__dirname,"y",'index.html'))
})


app.listen(
    port,()=>{
console.log("running in 4000");
    }
)

