const express =require("express");
const rotas= require("./rotas"); 
class App{
 constructor(){
    this.server=express();
 }
 middlewares(){
    this.server.use(express.json());
    //Camada entre o express e a aplicação 
    this.middlewares();
    this.rotas();
 }

 rotas(){
    this.server.use(rotas);
 }

}

module.exports =new App().server;
