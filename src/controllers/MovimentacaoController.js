const Movimentacao = require('../models/Movimentacao');

module.exports = {
    async index(req, res) {
        const movimento = await Movimentacao.findAll();

        return res.json(movimento);
    },
    async findByPk(req, res) {
        const { movimento_id } = req.params;
        const movimento = await Movimentacao.findByPk(movimento_id);

        if (!movimento) {
            return res.status(400).json({ Atenção: 'Movimentacao não econtrado' });
        }

        return res.json(movimento);
    },
    async findByPessoa(req, res){
        const { pessoa_id } = req.headers;
        const movimento = await Movimentacao.findAll({where: { pessoa_id }});

        if(!movimento){
            return res.json({ Atenção: "Nenhuma venda cadastrada" });
        }

        return res.json(movimento);
    },
    async store(req, res) {
        const { 
            pessoa_id,
            tipomovimentacao_id,
            tipopagamento_id,
            transacao,
            data,
            datacompra,
            datavenda,
            datacancelamento,
            valortotal,
            valorcancelado,
            protocolo, 
        } = req.body;
        const movimento = await Movimentacao.create({ 
            pessoa_id,
            tipomovimentacao_id,
            tipopagamento_id,
            transacao,
            data,
            datacompra,
            datavenda,
            datacancelamento,
            valortotal,
            valorcancelado,
            protocolo, 
        });

        return res.json(movimento);
    },
    async delete(req, res) {
        const { movimento_id } = req.params;
        const movimento = await Movimentacao.findByPk(movimento_id);

        if (!movimento) {
            return res.status(400).json({ Atenção: 'Movimento não econtrado' });
        }

        await movimento.destroy();
        return res.status(200).json({ Atenção: 'Movimento excluido com sucesso.' });
    },
    async update(req, res) {
        const { movimento_id} = req.params;
        const movimento = await Movimentacao.findByPk(movimento_id);

        if (!movimento) {
            return res.status(400).json({ Atenção: 'Movimento não econtrado' });
        }
        const { 
            pessoa_id,
            tipomovimentacao_id,
            tipopagamento_id,
            transacao,
            data,
            datacompra,
            datavenda,
            datacancelamento,
            valortotal,
            valorcancelado,
            protocolo,
         } = await movimento.update(req.body);

        return res.json({
            movimento_id,
            pessoa_id,
            tipomovimentacao_id,
            tipopagamento_id,
            transacao,
            data,
            datacompra,
            datavenda,
            datacancelamento,
            valortotal,
            valorcancelado,
            protocolo,
        });
    }
}