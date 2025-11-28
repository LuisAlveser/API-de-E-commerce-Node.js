//Arquivo de todas as rotas da API
const { Router }= require("express");
const rotas= new Router();

rotas.get("/",(req,res)=>{
   return res.json({menssage:"Hello"});
});

module.exports=rotas;