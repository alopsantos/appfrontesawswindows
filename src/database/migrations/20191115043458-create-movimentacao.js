'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.createTable('movimentacoes', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        pessoa_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        tipomovimentacao_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        tipopagamento_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        transacao:{
          type: Sequelize.STRING,
          allowNull: true,
        },
        data:{
          type: Sequelize.DATE(6),
          allowNull: false,
        },
        datacompra:{
          type: Sequelize.DATE(6),
          allowNull: true,
        },
        datavenda:{
          type: Sequelize.DATE(6),
          allowNull: true,
        },
        datacancelamento:{
          type: Sequelize.DATE(6),
          allowNull: true,
        },
        valortotal:{
          type: Sequelize.DECIMAL(10,2),
          allowNull: false,
        },
        valorcancelado:{
          type: Sequelize.DECIMAL(10,2),
          allowNull: true,
        },
        protocolo:{
          type: Sequelize.STRING(),
          allowNull: true,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('movimentacoes');

  }
};
