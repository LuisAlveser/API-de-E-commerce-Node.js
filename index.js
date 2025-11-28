import express from "express";
const server=express();


server.get("/hello",(req,res)=>{
    res.send("Olá mundo");
});
server.listen(3000);