'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.createTable("produtos",{
      id_produto:{
         type: Sequelize.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement:true
      } ,
        nome:{
         type: Sequelize.STRING,
         allowNull:false, 
      }, 
       preco:{
         type: Sequelize.DOUBLE,
         allowNull:false, 
      }, 
       estoque:{
         type: Sequelize.INTEGER,
         allowNull:false, 
      },
        descricao:{
         type: Sequelize.STRING,
         allowNull:false, 
      }, 
       created_at:{
         type: Sequelize.DATE,
         allowNull:false, 
      }, 
       updated_at:{
         type: Sequelize.DATE,
         allowNull:false, 
      }, 
    })
  },

  async down (queryInterface, Sequelize) {
   
    return  queryInterface.dropTable('produtos');
     
  }
};
