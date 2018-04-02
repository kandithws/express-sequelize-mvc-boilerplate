var express = require('express');
var router = express.Router();
var quotesController = require('../controllers/QuotesController');

// /quotes/

router.get('/new', quotesController.new);

router.post('/', quotesController.create);

// show quote
router.get('/:quote_id', quotesController.show);

router.get('/:quote_id/edit', quotesController.edit);

router.post('/:quote_id', quotesController.update);
router.patch('/:quote_id', quotesController.update);
router.put('/:quote_id', quotesController.update);

router.delete('/:quote_id', quotesController.destroy);

module.exports = router;