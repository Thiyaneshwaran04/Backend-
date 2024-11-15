const express=require("express");
const app=express()
const fs=require('fs')

app.get('/',(req,res)=>{

    res.end("hello World")
})

fs.open('../view/txt.txt',"r+",(err,fd)=>{
    if(err){
        console.log(err);
        return err
    }
   fs.readFile('../view/txt.txt',(err,data)=>{
    if(err){
        return err
    }
    else{
        console.log(data.toString());
        
    }
    let datasFromUser="Rewrite Successfully"
    fs.writeFile('../view/txt.txt',datasFromUser,(err)=>{
        if(err){
            return err
        }
       else{
        console.log("SUCCESS");
        
       }
    })
    let appendfromuser="and append successfully"
    fs.appendFile('../view/txt.txt',appendfromuser,(err)=>{
        if(err){
            return err
        }
        else{
            fs.close(fd,(err)=>{
                if(err){
                    console.log(err);
                    return err
                    
                }
                else{
                    console.log("close succesfully");
                    
                }
            })
        }
    }) 
   })
})
if(!fs.existsSync("../view/makedirectory.txt/makes.txt")){
    fs.mkdir("../view/makedirectory.txt",(err)=>{
        if(err){
            console.log(err);
            
            return err
        }
        else{
            console.log("created succesfullly");
            let data="file created"
            fs.writeFile("../view/makedirectory.txt/makes.txt",data,(err)=>{
                if (err) {
                   return err 
                }
            })
            
        }
    })
}



app.listen(2000,()=>{
    console.log("running in 2000");
    
})