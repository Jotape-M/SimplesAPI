const increment = {
    _id: 1, 
    
    get id() {
        return this._id++;
    }
}
    
const produtos = { }

function novoProduto(produto) {
    if(!produto.id) {
        produto.id = increment.id;
    }
    produtos[produto.id] = produto;
    return produtos[produto.id]
}

function getProduto(id) {
    return produtos[id] || {};
}

function getProdutos () {
    return produtos;
}

function deleteProduto(id) {
    delete produtos[id]
}

module.exports = { getProdutos, getProduto, novoProduto, deleteProduto}