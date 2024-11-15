const http  =require("http");
const port=3000;
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<H1>hi</h1>')
})
server.listen(port,()=>{
    console.log("server running");}
    )