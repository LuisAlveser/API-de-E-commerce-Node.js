import express from "express";
import  rotas  from "./rotas"; 
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

export default new App().server;
