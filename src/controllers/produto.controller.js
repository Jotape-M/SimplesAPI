const produtoModel = require('../models/produto.model');

module.exports = {

    get: (req, res) => {
        res.status(200).send(produtoModel.getProduto(req.params.id))
    },

    getAll: (req, res) => {
        res.status(200).send(produtoModel.getProdutos())
    },

    post: (req, res) => {
        res.status(200).send(produtoModel.novoProduto({
            nome: req.body.nome,
            preco: req.body.preco
        }))
    },

    put: (req, res) => {
        res.status(200).send(produtoModel.novoProduto({
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        }))
    },

    delete: (req, res) => {
        res.status(200).send(produtoModel.deleteProduto(req.params.id));
    }
}