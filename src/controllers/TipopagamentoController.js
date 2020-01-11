const Tipopagamento = require('../models/Tipopagamento');

module.exports = {
    async index(req, res){
        const tipopagamentos = await Tipopagamento.findAll();

        return res.json(tipopagamentos);
    },
    async findByPk(req, res){
        const { tipopagamento_id } = req.params;
        const tipopagamento = await Tipopagamento.findByPk(tipopagamento_id);
        
        if(!tipopagamento){
            return res.status(400).json({Atenção: 'Tipo de pagamento não econtrado'});
        }

        return res.json(tipopagamento);
    },
    async store(req, res){
        const {descricao} = req.body;
        const tipopagamento = await Tipopagamento.create({descricao});

        return res.json(tipopagamento);
    },
    async delete(req, res){
        const { tipopagamento_id } = req.params;
        const tipopagamento = await Tipopagamento.findByPk(tipopagamento_id);
        
        if(!tipopagamento){
            return res.status(400).json({Atenção: 'Tipo de pagamento não econtrado'});
        }

        await tipopagamento.destroy();
        return res.status(200).json({ Atenção: 'Tipo de pagamento excluido com sucesso.' });
    },
    async update(req, res){
        const {tipopagamento_id} = req.params;
        const tipopagamento = await Tipopagamento.findByPk(tipopagamento_id);

        if(!tipopagamento){
            return res.status(400).json({Atenção: 'Tipo de pagamento não econtrado'});
        }

        const {descricao} = await tipopagamento.update(req.body);

        return res.json({
            tipopagamento_id,
            descricao,
        });
    }
}