const express = require("express");

const router = express.Router();

const {
    getAllRestockRequests,
    getRestockRequestById,
    createRestockRequest,
    updateRestockRequest,
    deleteRestockRequest
} = require("../controllers/restockRequestController");

router.get("/", getAllRestockRequests);
router.get("/:id", getRestockRequestById);
router.post("/", createRestockRequest);
router.put("/:id", updateRestockRequest);
router.delete("/:id", deleteRestockRequest);

module.exports = router;