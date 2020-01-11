const express = require('express');
const PessoaController = require('./controllers/PessoaController');
const MovimentacaoController = require('./controllers/MovimentacaoController');

const TipopagamentoController = require('./controllers/TipopagamentoController');
const TipomovimentoController = require('./controllers/TipomovimentoController');

const routes = express.Router();

routes.get('/pessoas', PessoaController.index);
routes.get('/pessoasselect/:codigosetor', PessoaController.findAllAtributos);
routes.get('/pessoa/:pessoa_id', PessoaController.findByPk);
routes.post('/session/', PessoaController.findOne);
routes.post('/pessoas', PessoaController.store);
routes.delete('/pessoa/:pessoa_id', PessoaController.delete);
routes.put('/pessoa/:pessoa_id', PessoaController.update);

routes.get('/movimentos', MovimentacaoController.index);
routes.get('/movimento/:movimento_id', MovimentacaoController.findByPk);
routes.get('/dashboard', MovimentacaoController.findByPessoa);
routes.post('/movimentos', MovimentacaoController.store);
routes.delete('/movimento/:movimento_id', MovimentacaoController.delete);
routes.put('/movimento/:movimento_id', MovimentacaoController.update);


routes.get('/tipopagamentos', TipopagamentoController.index);
routes.get('/tipopagamento/:tipopagamento_id', TipopagamentoController.findByPk);
routes.post('/tipopagamentos', TipopagamentoController.store);
routes.delete('/tipopagamento/:tipopagamento_id', TipopagamentoController.delete);
routes.put('/tipopagamento/:tipopagamento_id', TipopagamentoController.update);

routes.get('/tipomovimentos', TipomovimentoController.index);
routes.get('/tipomovimento/:tipomovimento_id', TipomovimentoController.findByPk);
routes.post('/tipomovimentos', TipomovimentoController.store);
routes.delete('/tipomovimento/:tipomovimento_id', TipomovimentoController.delete);
routes.put('/tipomovimento/:tipomovimento_id', TipomovimentoController.update);


module.exports = routes;