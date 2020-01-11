const Tipomovimento = require('../models/Tipomovimento');

module.exports = {
    async index(req, res){
        const tipomovimento = await Tipomovimento.findAll();
        
        return res.json(tipomovimento);
    },
    async findByPk(req, res){
        const { tipomovimento_id } = req.params;
        const tipomovimento = await Tipomovimento.findByPk(tipomovimento_id);
        
        if(!tipomovimento){
            return res.status(400).json({Atenção: 'Tipo de tipomovimento não econtrado'});
        }

        return res.json(tipomovimento);
    },
    async store(req, res){
        const {descricao} = req.body;
        const tipomovimento = await Tipomovimento.create({descricao});

        return res.json(tipomovimento);
    },
    async delete(req, res){
        const { tipomovimento_id } = req.params;
        const tipomovimento = await Tipomovimento.findByPk(tipomovimento_id);
        
        if(!tipomovimento){
            return res.status(400).json({Atenção: 'Tipo de movimentacao não econtrado'});
        }

        await tipomovimento.destroy();
        return res.status(200).json({ Atenção: 'Tipo de movimentacao excluido com sucesso.' });
    },
    async update(req, res){
        const {tipomovimento_id} = req.params;
        const tipomovimento = await Tipomovimento.findByPk(tipomovimento_id);

        if(!tipomovimento){
            return res.status(400).json({Atenção: 'Tipo de movimentacao não econtrado'});
        }

        const {descricao} = await tipomovimento.update(req.body);

        return res.json({
            tipomovimento_id,
            descricao,
        });
    }
}