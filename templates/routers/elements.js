const express = require('express');
const router = express.Router();  // inizializzo il router
const elementsController = require('../controllers/elementsController')

// ROTTE CRUD //////////
// index
router.get('/', elementsController.index)

// show
router.get('/:id', elementsController.show)

//store
router.post('/', elementsController.store)

// update
router.put('/:id', elementsController.update)

// modify 
router.patch('/:id', elementsController.modify)

// destroy
router.delete('/:id', elementsController.destroy)


module.exports = router;