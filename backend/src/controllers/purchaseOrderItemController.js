const purchaseOrderItemService = require('../services/purchaseOrderItemService');

const getAllPurchaseOrderItems = async (req, res) => {
    try {
        const items = await purchaseOrderItemService.getAllPurchaseOrderItems();
        res.status(200).json(items);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to get purchase order items'
        });
    }
};

const getPurchaseOrderItemById = async (req, res) => {
    try {
        const item = await purchaseOrderItemService.getPurchaseOrderItemById(
            req.params.id
        );

        if (!item) {
            return res.status(404).json({
                message: 'Purchase order item not found'
            });
        }

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to get purchase order item'
        });
    }
};

const createPurchaseOrderItem = async (req, res) => {
    try {
        const {
            orderID,
            productID,
            quantity_ordered,
            unit_cost
        } = req.body;

        if (
            !orderID ||
            !productID ||
            quantity_ordered === undefined ||
            unit_cost === undefined
        ) {
            return res.status(400).json({
                message: 'orderID, productID, quantity_ordered, and unit_cost are required'
            });
        }

        const item = await purchaseOrderItemService.createPurchaseOrderItem(
            req.body
        );

        res.status(201).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to create purchase order item'
        });
    }
};

const updatePurchaseOrderItem = async (req, res) => {
    try {
        const item = await purchaseOrderItemService.updatePurchaseOrderItem(
            req.params.id,
            req.body
        );

        res.status(200).json(item);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to update purchase order item'
        });
    }
};

const deletePurchaseOrderItem = async (req, res) => {
    try {
        await purchaseOrderItemService.deletePurchaseOrderItem(req.params.id);

        res.status(200).json({
            message: 'Purchase order item deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to delete purchase order item'
        });
    }
};

module.exports = {
    getAllPurchaseOrderItems,
    getPurchaseOrderItemById,
    createPurchaseOrderItem,
    updatePurchaseOrderItem,
    deletePurchaseOrderItem
};