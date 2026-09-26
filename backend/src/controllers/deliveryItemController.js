const deliveryItemService = require('../services/deliveryItemService');

const getAllDeliveryItems = async (req, res) => {
    try {
        const data = await deliveryItemService.getAllDeliveryItems();
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to get delivery items'
        });
    }
};

const getDeliveryItemById = async (req, res) => {
    try {
        const data = await deliveryItemService.getDeliveryItemById(
            req.params.id
        );

        if (!data) {
            return res.status(404).json({
                message: 'Delivery item not found'
            });
        }

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to get delivery item'
        });
    }
};

const createDeliveryItem = async (req, res) => {
    try {
        console.log("DELIVERY ITEM BODY:", req.body);

        const data = await deliveryItemService.createDeliveryItem(req.body);

        res.status(201).json(data);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to create delivery item',
            error: error.message
        });
    }
};

const updateDeliveryItem = async (req, res) => {
    try {
        const data = await deliveryItemService.updateDeliveryItem(
            req.params.id,
            req.body
        );

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to update delivery item',
            error: error.message
        });
    }
};

const deleteDeliveryItem = async (req, res) => {
    try {
        await deliveryItemService.deleteDeliveryItem(req.params.id);

        res.status(200).json({
            message: 'Delivery item deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to delete delivery item',
            error: error.message
        });
    }
};

module.exports = {
    getAllDeliveryItems,
    getDeliveryItemById,
    createDeliveryItem,
    updateDeliveryItem,
    deleteDeliveryItem
};