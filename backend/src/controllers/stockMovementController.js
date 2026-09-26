const stockMovementService = require('../services/stockMovementService');

const getAllStockMovements = async (req, res) => {
    try {
        const movements = await stockMovementService.getAllStockMovements();

        res.status(200).json(movements);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching stock movements'
        });
    }
};

const getStockMovementById = async (req, res) => {
    try {
        const { id } = req.params;

        const movement = await stockMovementService.getStockMovementById(id);

        if (!movement) {
            return res.status(404).json({
                message: 'Stock movement not found'
            });
        }

        res.status(200).json(movement);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error fetching stock movement'
        });
    }
};

const createStockMovement = async (req, res) => {
    try {
        const movement = await stockMovementService.createStockMovement(req.body);

        res.status(201).json(movement);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating stock movement',
            error: error.message
        });
    }
};

const updateStockMovement = async (req, res) => {
    try {
        const { id } = req.params;

        const movement = await stockMovementService.updateStockMovement(
            id,
            req.body
        );

        res.status(200).json(movement);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error updating stock movement',
            error: error.message
        });
    }
};

const deleteStockMovement = async (req, res) => {
    try {
        const { id } = req.params;

        await stockMovementService.deleteStockMovement(id);

        res.status(200).json({
            message: 'Stock movement deleted successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error deleting stock movement',
            error: error.message
        });
    }
};

module.exports = {
    getAllStockMovements,
    getStockMovementById,
    createStockMovement,
    updateStockMovement,
    deleteStockMovement
};
