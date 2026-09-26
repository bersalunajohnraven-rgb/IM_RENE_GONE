const deliveryService = require('../services/deliveryService');

const getAllDeliveries = async (req, res) => {
    try {
        const deliveries = await deliveryService.getAllDeliveries();

        res.status(200).json(deliveries);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get deliveries'
        });
    }
};

const getDeliveryById = async (req, res) => {
    try {
        const delivery = await deliveryService.getDeliveryById(
            req.params.id
        );

        if (!delivery) {
            return res.status(404).json({
                message: 'Delivery not found'
            });
        }

        res.status(200).json(delivery);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to get delivery'
        });
    }
};

const createDelivery = async (req, res) => {
    try {
        const {
            orderID,
            branchID,
            received_by,
            received_at
        } = req.body;

        if (!orderID || !branchID) {
            return res.status(400).json({
                message: 'orderID and branchID are required'
            });
        }

        const delivery = await deliveryService.createDelivery({
            orderID,
            branchID,
            received_by,
            received_at
        });

        res.status(201).json(delivery);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to create delivery'
        });
    }
};

const updateDelivery = async (req, res) => {
    try {
        const delivery = await deliveryService.updateDelivery(
            req.params.id,
            req.body
        );

        res.status(200).json(delivery);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to update delivery'
        });
    }
};

const deleteDelivery = async (req, res) => {
    try {
        await deliveryService.deleteDelivery(req.params.id);

        res.status(200).json({
            message: 'Delivery deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to delete delivery'
        });
    }
};

module.exports = {
    getAllDeliveries,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};