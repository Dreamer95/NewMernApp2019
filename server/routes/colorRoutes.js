const router = require('express').Router();
const colorController = require('./../controllers/colorController');

router.post('/',colorController.create);
router.get('/',colorController.getAll);
router.delete('/:id',colorController.delete);
router.put('/:id',colorController.put);

module.exports = router;