const express = require("express");

const router = express.Router();

const {
    getAllSaleItems,
    getSaleItemById,
    createSaleItem,
    updateSaleItem,
    deleteSaleItem
} = require("../controllers/saleItemController");

router.get("/", getAllSaleItems);
router.get("/:id", getSaleItemById);
router.post("/", createSaleItem);
router.put("/:id", updateSaleItem);
router.delete("/:id", deleteSaleItem);

module.exports = router;