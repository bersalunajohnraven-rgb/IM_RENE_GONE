const inventoryService = require('../services/inventoryService');

const getAllInventory = async (req, res) => {
    try {
        const inventory = await inventoryService.getAllInventory();

        res.status(200).json(inventory);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to retrieve inventory'
        });
    }
};

const getInventoryById = async (req, res) => {
    try {
        const { id } = req.params;

        const inventory = await inventoryService.getInventoryById(id);

        if (!inventory) {
            return res.status(404).json({
                message: 'Inventory record not found'
            });
        }

        res.status(200).json(inventory);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to retrieve inventory record'
        });
    }
};

const createInventory = async (req, res) => {
    try {
        const {
            productID,
            branchID,
            quantity,
            reorder_threshold
        } = req.body;

        if (!productID || !branchID) {
            return res.status(400).json({
                message: 'productID and branchID are required'
            });
        }

        const inventory = await inventoryService.createInventory({
            productID,
            branchID,
            quantity,
            reorder_threshold
        });

        res.status(201).json(inventory);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to create inventory'
        });
    }
};

const updateInventory = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            productID,
            branchID,
            quantity,
            reorder_threshold
        } = req.body;

        const inventory = await inventoryService.updateInventory(id, {
            productID,
            branchID,
            quantity,
            reorder_threshold
        });

        res.status(200).json(inventory);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to update inventory'
        });
    }
};

const deleteInventory = async (req, res) => {
    try {
        const { id } = req.params;

        await inventoryService.deleteInventory(id);

        res.status(200).json({
            message: 'Inventory deleted successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to delete inventory'
        });
    }
};

module.exports = {
    getAllInventory,
    getInventoryById,
    createInventory,
    updateInventory,
    deleteInventory
};