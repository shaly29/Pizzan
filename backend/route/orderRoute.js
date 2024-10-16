import express from "express";
import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrderStatus,
    deleteOrder,
} from "../controller/orderController.js";

const router = express.Router();

// Route to create a new order
router.post("/", createOrder);

// Route to get all orders
router.get("/", getOrders);

// Route to get a single order by ID
router.get("/:id", getOrderById);

// Route to update an order's status
router.patch("/:id/status", updateOrderStatus);

// Route to delete an order
router.delete("/:id", deleteOrder);

export default router;
