const express = require('express');

const router = express.Router();

const purchaseOrderItemController = require('../controllers/purchaseOrderItemController');

router.get('/', purchaseOrderItemController.getAllPurchaseOrderItems);

router.get('/:id', purchaseOrderItemController.getPurchaseOrderItemById);

router.post('/', purchaseOrderItemController.createPurchaseOrderItem);

router.put('/:id', purchaseOrderItemController.updatePurchaseOrderItem);

router.delete('/:id', purchaseOrderItemController.deletePurchaseOrderItem);

module.exports = router;