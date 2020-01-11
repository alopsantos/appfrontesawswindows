const { Model, DataTypes } = require('sequelize');

class Movimentacao extends Model{
    static init(sequelize){
        super.init({
            pessoa_id: DataTypes.INTEGER,
            tipomovimentacao_id:DataTypes.INTEGER,
            tipopagamento_id: DataTypes.INTEGER,
            transacao: DataTypes.STRING,
            data: DataTypes.DATE(6),
            datacompra: DataTypes.DATE(6),
            datavenda: DataTypes.DATE(6),
            datacancelamento: DataTypes.DATE(6),
            valortotal: DataTypes.DECIMAL(10,2),
            valorcancelado: DataTypes.DECIMAL(10,2),
            protocolo: DataTypes.STRING()     
        }, {
            sequelize,
            tableName: 'movimentacoes'
        })
    }
}

module.exports = Movimentacao;