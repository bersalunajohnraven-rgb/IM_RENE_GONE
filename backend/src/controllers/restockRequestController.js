const restockRequestService = require("../services/restockRequestService");

const getAllRestockRequests = async (req, res) => {
    try {
        const restockRequests = await restockRequestService.getAllRestockRequests();
        res.status(200).json(restockRequests);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to get restock requests"
        });
    }
};

const getRestockRequestById = async (req, res) => {
    try {
        const restockRequest = await restockRequestService.getRestockRequestById(req.params.id);

        if (!restockRequest) {
            return res.status(404).json({
                message: "Restock request not found"
            });
        }

        res.status(200).json(restockRequest);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to get restock request"
        });
    }
};

const createRestockRequest = async (req, res) => {
    try {
        console.log("RESTOCK REQUEST BODY:", req.body);

        const restockRequest = await restockRequestService.createRestockRequest(req.body);

        res.status(201).json(restockRequest);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to create restock request",
            error: error.message
        });
    }
};

const updateRestockRequest = async (req, res) => {
    try {
        const restockRequest = await restockRequestService.updateRestockRequest(
            req.params.id,
            req.body
        );

        res.status(200).json(restockRequest);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update restock request",
            error: error.message
        });
    }
};

const deleteRestockRequest = async (req, res) => {
    try {
        await restockRequestService.deleteRestockRequest(req.params.id);

        res.status(200).json({
            message: "Restock request deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete restock request",
            error: error.message
        });
    }
};

module.exports = {
    getAllRestockRequests,
    getRestockRequestById,
    createRestockRequest,
    updateRestockRequest,
    deleteRestockRequest
};