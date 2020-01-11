const { Model, DataTypes } = require('sequelize');

class Tipomovimento extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.STRING 
        }, {
            sequelize,
            tableName: 'tipomovimentacoes'
        })
    }
}

module.exports = Tipomovimento;