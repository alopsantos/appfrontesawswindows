const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model{
    static init(sequelize){
        super.init({
            codigosetor: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            atividade: DataTypes.STRING,            
        }, {
            sequelize,
            tableName: 'pessoas'
        })
    }
}

module.exports = Pessoa;