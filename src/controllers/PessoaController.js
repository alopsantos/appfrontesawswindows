const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(req, res){
        const pessoas = await Pessoa.findAll();

        return res.json(pessoas);
    },
    async findAllAtributos(req, res){
        const { codigosetor } = req.params;
        const pessoas = await Pessoa.findAll({where: {codigosetor}},{
            attributes: ['id', 'nome']
        });

        return res.json(pessoas);
    },
    async findOne(req, res){
        const { email, password } = req.body;
        let pessoa = await Pessoa.findOne( { where: { email, password }});

        if(!pessoa){
            return res.json('Atenção você não tem acesso ao app, falar com o Anderson para cadastro!');
        }
        return res.json(pessoa);
    },
    async findByPk(req, res){
        const { pessoa_id } = req.params;
        
        const pessoa = await Pessoa.findByPk(pessoa_id);
        
        if(!pessoa){
            return res.status(400).json({Atenção: 'Pessoa não cadastrada'});
        }
        return res.json(pessoa);
    },
    async store(req, res){
        const {codigosetor, nome, email, password, atividade} = req.body;
        const pessoa = await Pessoa.create({codigosetor, nome, email, password, atividade});

        return res.json(pessoa);
    },
    async delete(req, res){
        const { pessoa_id } = req.params;
        const pessoa = await Pessoa.findByPk(pessoa_id);
        
        if(!pessoa){
            return res.status(400).json({Atenção: 'Pessoa não cadastrada'});
        }

        await pessoa.destroy();
        return res.status(200).json({ Atenção: 'Pessoa excluida com sucesso.' });
    },
    async update(req, res){
        const {pessoa_id} = req.params;
        const pessoa = await Pessoa.findByPk(pessoa_id);

        if(!pessoa){
            return res.status(400).json({Atenção: 'Pessoa nao cadastrada'});
        }

        const {codigosetor, nome, email, password, atividade} = await pessoa.update(req.body);

        return res.json({
            pessoa_id,
            codigosetor,
            nome,
            email,
            password,
            atividade,
        });
    }
}