const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const produtoRouter = require('./routes/produto.route');
const porta = 3003;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(produtoRouter);



app.listen(porta);