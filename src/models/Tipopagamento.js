const { Model, DataTypes } = require('sequelize');

class Tipopagamento extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING 
        }, {
            sequelize,
            tableName: 'tipopagamentos'
        })
    }
}

module.exports = Tipopagamento;