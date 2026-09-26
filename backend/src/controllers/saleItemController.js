const saleItemService = require("../services/saleItemService");

const getAllSaleItems = async (req, res) => {
    try {
        const saleItems = await saleItemService.getAllSaleItems();
        res.status(200).json(saleItems);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to get sale items"
        });
    }
};

const getSaleItemById = async (req, res) => {
    try {
        const saleItem = await saleItemService.getSaleItemById(req.params.id);

        if (!saleItem) {
            return res.status(404).json({
                message: "Sale item not found"
            });
        }

        res.status(200).json(saleItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to get sale item"
        });
    }
};

const createSaleItem = async (req, res) => {
    try {
        console.log("SALE ITEM BODY:", req.body);

        const saleItem = await saleItemService.createSaleItem(req.body);

        res.status(201).json(saleItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create sale item",
            error: error.message
        });
    }
};

const updateSaleItem = async (req, res) => {
    try {
        const saleItem = await saleItemService.updateSaleItem(
            req.params.id,
            req.body
        );

        res.status(200).json(saleItem);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update sale item",
            error: error.message
        });
    }
};

const deleteSaleItem = async (req, res) => {
    try {
        await saleItemService.deleteSaleItem(req.params.id);

        res.status(200).json({
            message: "Sale item deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete sale item",
            error: error.message
        });
    }
};

module.exports = {
    getAllSaleItems,
    getSaleItemById,
    createSaleItem,
    updateSaleItem,
    deleteSaleItem
};