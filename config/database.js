

module.exports={
    dialect:'postgres',
    host:"localhost",
    username:"postgres",
    password:"alegrete",
    database:" E-commerce ",
    define:{
        timestamp:true,//cria duas colunas: createdAt e updatedAt
        underscored:true,
    }
};