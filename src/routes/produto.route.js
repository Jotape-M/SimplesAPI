const express = require('express');
const router = express.Router();

const controller = require('../controllers/produto.controller');

router.get('/produtos', controller.getAll);
router.get('/produtos/:id', controller.get);
router.post('/produtos', controller.post);
router.put('/produtos/:id', controller.put)
router.delete('/produtos/:id', controller.delete);

module.exports = router;