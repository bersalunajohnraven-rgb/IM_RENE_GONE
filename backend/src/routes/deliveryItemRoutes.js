const express = require('express');
const router = express.Router();

const deliveryItemController = require('../controllers/deliveryItemController');

router.get('/', deliveryItemController.getAllDeliveryItems);
router.get('/:id', deliveryItemController.getDeliveryItemById);
router.post('/', deliveryItemController.createDeliveryItem);
router.put('/:id', deliveryItemController.updateDeliveryItem);
router.delete('/:id', deliveryItemController.deleteDeliveryItem);

module.exports = router;