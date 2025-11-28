//Arquivo de todas as rotas da API
import  { Router } from  "express";
const rotas= new Router();
import produto from "./controllers/ProdutoController";


rotas.get("/produtos",produto.index);
rotas.get("/produto/:id",produto.show);
rotas.post("/produto",produto.create);
rotas.delete("/produto/:id",produto.destroy);
rotas.update("/produto/:id",produto.update);



export default  rotas;